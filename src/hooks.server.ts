import { pb } from '$config/pocketbase';
import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from '@sveltejs/kit/hooks';
import { serializeNonPOJOs } from '$utils';

export const defaultHandle: Handle = async ({ event, resolve }) => {
    // Before Response
    pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    if (pb.authStore.isValid) {
      try {
          await pb.collection('users').authRefresh();
      } catch (_) {
          pb.authStore.clear();
          event.locals.user = null;
      }
    } else {
      event.locals.user = null;
    }
    
    event.locals.pb = pb;
    event.locals.user = serializeNonPOJOs(pb.authStore.model);
    // Redirect Back 
	if (event.url.pathname.startsWith("/dashboard")) {
        if (!event.locals.user) {
            // not logged in. send to /login
            throw redirect(303, "/")
        }
    }

    const response = await resolve(event);
    // After Response
    response.headers.set(
        'set-cookie',
        pb.authStore.exportToCookie({ secure: false, httpOnly: false })
    )
    return response
};

export const handle = sequence(defaultHandle);