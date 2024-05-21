import { AlternativeAuthDivider } from '../../common/AlternativeAuthDivider';
import { AuthBox } from '../../common/AuthBox';
import { SignInAuthBoxMessages } from './SignInAuthBox.messages';
import { SignInAuthBoxProvider } from './SignInAuthBox.provider';
import { SignInAuthBoxBottomContent } from './SignInAuthBoxBottomContent/SignInAuthBoxBottomContent';
import { SignInAuthBoxForm } from './SignInAuthBoxForm/SignInAuthBoxForm';

import Logo from '@/common/assets/svg/logo.svg';

export const SignInAuthBox = () => (
	<SignInAuthBoxMessages>
		<SignInAuthBoxProvider>
			<AuthBox>
				<Logo aria-hidden className="mb-9 mt-5 w-44 text-primary" />
				<SignInAuthBoxForm />
				<div className="mb-7 mt-5 w-full">
					<AlternativeAuthDivider />
				</div>
				<SignInAuthBoxBottomContent />
			</AuthBox>
		</SignInAuthBoxProvider>
	</SignInAuthBoxMessages>
);
