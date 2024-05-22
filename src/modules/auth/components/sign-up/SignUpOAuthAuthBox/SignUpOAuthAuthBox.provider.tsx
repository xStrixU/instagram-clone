import { useFormState } from 'react-dom';

import { createSafeContext } from '@/common/lib/createSafeContext';
import { signUpOAuth } from '@/modules/auth/actions/actions';

import type { ReactNode } from 'react';

import type { CommonError } from '@/common/lib/errors';
import type { AuthError } from '@/modules/auth/lib/errors';

interface SignUpOAuthAuthBoxContextValue {
	signUpOAuthState: { error: CommonError | AuthError } | null;
	signUpOAuthFormAction: (payload: FormData) => void;
}

const [useSignUpOAuthAuthBoxContext, SignUpOAuthAuthBoxContextProvider] =
	createSafeContext<SignUpOAuthAuthBoxContextValue>();

type SignUpOAuthAuthBoxProviderProps = Readonly<{
	children: ReactNode;
}>;

const SignUpOAuthAuthBoxProvider = ({
	children,
}: SignUpOAuthAuthBoxProviderProps) => {
	const [signUpOAuthState, signUpOAuthFormAction] = useFormState(
		signUpOAuth,
		null,
	);

	return (
		<SignUpOAuthAuthBoxContextProvider
			value={{
				signUpOAuthState,
				signUpOAuthFormAction,
			}}
		>
			{children}
		</SignUpOAuthAuthBoxContextProvider>
	);
};

export { SignUpOAuthAuthBoxProvider, useSignUpOAuthAuthBoxContext };
