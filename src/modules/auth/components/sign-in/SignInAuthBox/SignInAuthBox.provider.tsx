'use client';

import { useFormState } from 'react-dom';

import { createSafeContext } from '@/common/lib/createSafeContext';
import { signIn } from '@/modules/auth/actions/actions';

import type { ReactNode } from 'react';

import type { CommonError } from '@/common/lib/errors';
import type { AuthError } from '@/modules/auth/lib/errors';

interface SignInAuthBoxContextValue {
	signInState: { error: CommonError | AuthError } | null;
	signInFormAction: (payload: FormData) => void;
}

const [useSignInAuthBoxContext, SignInAuthBoxContextProvider] =
	createSafeContext<SignInAuthBoxContextValue>();

type SignInAuthBoxProviderProps = Readonly<{
	children: ReactNode;
}>;

const SignInAuthBoxProvider = ({ children }: SignInAuthBoxProviderProps) => {
	const [signInState, signInFormAction] = useFormState(signIn, null);

	return (
		<SignInAuthBoxContextProvider value={{ signInState, signInFormAction }}>
			{children}
		</SignInAuthBoxContextProvider>
	);
};

export { SignInAuthBoxProvider, useSignInAuthBoxContext };
