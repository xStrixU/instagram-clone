import Image from 'next/image';

import type { OAuthUser } from '@/modules/api/oauth/oauth.schemas';

type SignUpOAuthAuthBoxProfilePictureProps = Readonly<{
	user: OAuthUser;
}>;

export const SignUpOAuthAuthBoxProfilePicture = ({
	user,
}: SignUpOAuthAuthBoxProfilePictureProps) => (
	<Image
		src={user.pictureURL}
		alt={user.fullName}
		width={88}
		height={88}
		className="rounded-full border border-separator"
	/>
);
