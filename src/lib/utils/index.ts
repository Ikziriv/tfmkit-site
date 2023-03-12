const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = <T>(obj: T): T => {
	return structuredClone(obj);
};

export const generateUsername = (name: string | any[]) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};

export const getImageURL = (collectionId: string, recordId: string, fileName: string, size = '0x0') => {
	return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

export function getCookie(name: string): string {
	const cookies: string[] = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
	  const cookie: string = cookies[i].trim();
	  if (cookie.startsWith(`${name}=`)) {
		return cookie.substring(`${name}=`.length, cookie.length);
	  }
	}
	return 'system';
  }