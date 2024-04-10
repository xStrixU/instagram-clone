import { AlternativeAuthDivider } from '../../common/AlternativeAuthDivider';
import { AuthBox } from '../../common/AuthBox';
import { SignInAuthBoxBottomContent } from './SignInAuthBoxBottomContent/SignInAuthBoxBottomContent';
import { SignInAuthBoxForm } from './SignInAuthBoxForm/SignInAuthBoxForm';
import { SignInAuthBoxFormMessages } from './SignInAuthBoxForm/SignInAuthBoxFormMessages';

import Logo from '@/common/assets/svg/logo.svg';

export const SignInAuthBox = () => (
	<AuthBox>
		<Logo aria-hidden className="mb-9 mt-5 w-44 text-primary" />
		<SignInAuthBoxFormMessages>
			<SignInAuthBoxForm />
		</SignInAuthBoxFormMessages>
		<div className="mb-7 mt-5 w-full">
			<AlternativeAuthDivider />
		</div>
		<SignInAuthBoxBottomContent />
	</AuthBox>
);
