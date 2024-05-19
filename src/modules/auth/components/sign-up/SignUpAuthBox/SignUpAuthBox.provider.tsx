import { useState } from 'react';
import { useFormState } from 'react-dom';

import { createSafeContext } from '@/common/lib/createSafeContext';
import { signUp } from '@/modules/auth/actions/actions';

import type { SignUpAuthBoxFormSchema } from './SignUpFormAuthBox/SignUpFormAuthBoxForm/SignUpFormAuthBoxForm.schema';
import type { ReactNode } from 'react';

import type { CommonError } from '@/common/lib/errors';
import type { AuthError } from '@/modules/auth/lib/errors';

interface SignUpAuthBoxContextValue {
	formData: SignUpAuthBoxFormSchema | null;
	birthDate: Date | null;
	signUpState: { error: CommonError | AuthError } | null;
	setFormData: (formData: SignUpAuthBoxFormSchema | null) => void;
	setBirthDate: (birthDate: Date) => void;
	signUpFormAction: (payload: FormData) => void;
}

const [useSignUpAuthBoxContext, SignUpAuthBoxContextProvider] =
	createSafeContext<SignUpAuthBoxContextValue>();

type SignUpAuthBoxProviderProps = Readonly<{
	children: ReactNode;
}>;

const SignUpAuthBoxProvider = ({ children }: SignUpAuthBoxProviderProps) => {
	const [formData, setFormData] = useState<SignUpAuthBoxFormSchema | null>(
		null,
	);
	const [birthDate, setBirthDate] = useState<Date | null>(null);
	const [signUpState, signUpFormAction] = useFormState(signUp, null);

	return (
		<SignUpAuthBoxContextProvider
			value={{
				formData,
				birthDate,
				signUpState,
				setFormData,
				setBirthDate,
				signUpFormAction,
			}}
		>
			{children}
		</SignUpAuthBoxContextProvider>
	);
};

export { SignUpAuthBoxProvider, useSignUpAuthBoxContext };
