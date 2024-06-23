import { createStoreContext } from '@/common/lib/createStoreContext';

import type { SignUpAuthBoxFormSchema } from './SignUpFormAuthBox/SignUpFormAuthBoxForm/SignUpFormAuthBoxForm.schema';
import type { ReactNode } from 'react';

interface SignUpAuthBoxState {
	formData: SignUpAuthBoxFormSchema | null;
	birthDate: Date | null;
	setFormData: (formData: SignUpAuthBoxFormSchema | null) => void;
	setBirthDate: (birthDate: Date) => void;
}

const [
	useCreateStore,
	SignUpAuthBoxStoreContextProvider,
	useSignUpAuthBoxStore,
] = createStoreContext<SignUpAuthBoxState>(({ set }) => ({
	formData: null,
	birthDate: null,
	setFormData: formData => set({ formData }),
	setBirthDate: birthDate => set({ birthDate }),
}));

type SignUpAuthBoxStoreProviderProps = Readonly<{
	children: ReactNode;
}>;

const SignUpAuthBoxStoreProvider = ({
	children,
}: SignUpAuthBoxStoreProviderProps) => {
	const store = useCreateStore();

	return (
		<SignUpAuthBoxStoreContextProvider value={store}>
			{children}
		</SignUpAuthBoxStoreContextProvider>
	);
};

export { SignUpAuthBoxStoreProvider, useSignUpAuthBoxStore };
