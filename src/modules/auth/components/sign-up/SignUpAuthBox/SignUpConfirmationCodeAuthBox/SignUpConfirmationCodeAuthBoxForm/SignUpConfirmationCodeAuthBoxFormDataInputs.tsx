import { useSignUpAuthBoxContext } from '../../SignUpAuthBox.provider';

export const SignUpConfirmationCodeAuthBoxFormDataInputs = () => {
	const { formData, birthDate } = useSignUpAuthBoxContext();

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
