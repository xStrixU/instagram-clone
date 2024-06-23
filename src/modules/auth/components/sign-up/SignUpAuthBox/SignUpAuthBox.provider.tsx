import { useFormState } from 'react-dom';

import { createSafeContext } from '@/common/lib/createSafeContext';
import { signUp } from '@/modules/auth/actions/actions';

import type { ReactNode } from 'react';

import type { CommonError } from '@/common/lib/errors';
import type { AuthError } from '@/modules/auth/lib/errors';

interface SignUpAuthBoxContextValue {
	signUpState: { error: CommonError | AuthError } | null;
	signUpFormAction: (payload: FormData) => void;
}

const [useSignUpAuthBoxContext, SignUpAuthBoxContextProvider] =
	createSafeContext<SignUpAuthBoxContextValue>();

type SignUpAuthBoxProviderProps = Readonly<{
	children: ReactNode;
}>;

const SignUpAuthBoxProvider = ({ children }: SignUpAuthBoxProviderProps) => {
	const [signUpState, signUpFormAction] = useFormState(signUp, null);

	return (
		<SignUpAuthBoxContextProvider value={{ signUpState, signUpFormAction }}>
			{children}
		</SignUpAuthBoxContextProvider>
	);
};

export { SignUpAuthBoxProvider, useSignUpAuthBoxContext };
