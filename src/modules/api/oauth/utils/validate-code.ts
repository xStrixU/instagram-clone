import { facebook } from '../oauth.config';
import { oauthUserSchema } from '../oauth.schemas';

interface FacebookUser {
	id: string;
	name: string;
	email: string;
	birthday: string;
	picture: {
		data: {
			url: string;
		};
	};
}

export const validateFacebookCode = async (code: string) => {
	const { accessToken } = await facebook.validateAuthorizationCode(code);
	const { id, name, email, birthday, picture } = await fetch(
		`https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,email,birthday,picture`,
	).then(response => response.json() as Promise<FacebookUser>);

	return oauthUserSchema.parse({
		accountId: id,
		fullName: name,
		email,
		birthday,
		pictureURL: picture.data.url,
	});
};
