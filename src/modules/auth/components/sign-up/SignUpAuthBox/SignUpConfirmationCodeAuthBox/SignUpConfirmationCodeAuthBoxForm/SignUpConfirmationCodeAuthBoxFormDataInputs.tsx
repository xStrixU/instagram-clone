import { useShallow } from 'zustand/react/shallow';

import { useSignUpAuthBoxStore } from '../../SignUpAuthBox.store';

export const SignUpConfirmationCodeAuthBoxFormDataInputs = () => {
	const [formData, birthDate] = useSignUpAuthBoxStore(
		useShallow(state => [state.formData, state.birthDate]),
	);

	if (!formData || !birthDate) {
		return null;
	}

	return (
		<>
			<input type="hidden" name="fullName" value={formData.fullName} />
			<input type="hidden" name="username" value={formData.username} />
			<input type="hidden" name="email" value={formData.email} />
			<input type="hidden" name="password" value={formData.password} />
			<input type="hidden" name="birthday" value={birthDate.toDateString()} />
		</>
	);
};
