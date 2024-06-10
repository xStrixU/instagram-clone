import { cookies } from 'next/headers';

import { SESSION_COOKIE_NAME } from '@/modules/api/sessions/sessions.constants';
import * as sessionsService from '@/modules/api/sessions/sessions.service';

export const GET = async () => {
	const sessionId = cookies().get(SESSION_COOKIE_NAME)?.value ?? null;
	const { session } = await sessionsService.findById(sessionId ?? '');

	if (!session) {
		return new Response(null, {
			status: 401,
		});
	}

	return Response.json(session);
};
