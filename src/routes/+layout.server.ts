import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {

	if (locals.user) {
		return {
			model: locals.user
		};
	}

	return {
		model: undefined
	};
};