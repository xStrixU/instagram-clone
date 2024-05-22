import type { OAuthProvider } from '@/modules/api/oauth/oauth.providers';
import type { OAuthUser } from '@/modules/api/oauth/oauth.schemas';

type SignUpOAuthAuthBoxFormDataInputsProps = Readonly<{
	provider: OAuthProvider;
	user: OAuthUser;
}>;

export const SignUpOAuthAuthBoxFormDataInputs = ({
	provider,
	user,
}: SignUpOAuthAuthBoxFormDataInputsProps) => (
	<>
		<input type="hidden" name="provider" value={provider} />
		<input type="hidden" name="accountId" value={user.accountId} />
		<input type="hidden" name="email" value={user.email} />
		<input type="hidden" name="birthday" value={user.birthday} />
	</>
);
