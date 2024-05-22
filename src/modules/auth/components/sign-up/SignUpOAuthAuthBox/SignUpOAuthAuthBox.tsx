'use client';

import { AuthBox } from '../../common/AuthBox';
import { SignUpOAuthAuthBoxProvider } from './SignUpOAuthAuthBox.provider';
import { SignUpOAuthAuthBoxError } from './SignUpOAuthAuthBoxError';
import { SignUpOAuthAuthBoxForm } from './SignUpOAuthAuthBoxForm/SignUpOAuthAuthBoxForm';
import { SignUpOAuthAuthBoxProfilePicture } from './SignUpOAuthAuthBoxProfilePicture';
import { useSignUpOAuthAuthBox } from './useSignUpOAuthAuthBox';

import Logo from '@/common/assets/svg/logo.svg';

export const SignUpOAuthAuthBox = () => {
	const { provider, user } = useSignUpOAuthAuthBox();

	return (
		<SignUpOAuthAuthBoxProvider>
			<AuthBox className="gap-4">
				<Logo aria-hidden className="mb-3 mt-5 w-44 text-primary" />
				<SignUpOAuthAuthBoxProfilePicture user={user} />
				<SignUpOAuthAuthBoxForm provider={provider} user={user} />
				<SignUpOAuthAuthBoxError />
			</AuthBox>
		</SignUpOAuthAuthBoxProvider>
	);
};
