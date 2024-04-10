import { useState } from 'react';

import { createSafeContext } from '@/common/lib/createSafeContext';

import type { SignUpAuthBoxFormSchema } from './SignUpFormAuthBox/SignUpFormAuthBoxForm/SignUpFormAuthBoxForm.schema';
import type { ReactNode } from 'react';

interface SignUpAuthBoxContextValue {
	formData: SignUpAuthBoxFormSchema | null;
	birthDate: Date | null;
	setFormData: (formData: SignUpAuthBoxFormSchema | null) => void;
	setBirthDate: (birthDate: Date) => void;
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

	return (
		<SignUpAuthBoxContextProvider
			value={{ formData, birthDate, setFormData, setBirthDate }}
		>
			{children}
		</SignUpAuthBoxContextProvider>
	);
};

export { SignUpAuthBoxProvider, useSignUpAuthBoxContext };
