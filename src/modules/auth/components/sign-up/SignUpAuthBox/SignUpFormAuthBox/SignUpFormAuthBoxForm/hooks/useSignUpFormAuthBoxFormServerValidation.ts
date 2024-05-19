import * as usersActions from '@/common/actions/users.actions';
import { useServerFormValidation } from '@/common/hooks/useServerFormValidation';

const fields = ['username', 'email'] as const;

type Field = (typeof fields)[number];

interface UseSignUpFormAuthBoxFormServerValidationInput {
	validateClient: (field: Field) => Promise<boolean>;
	getValue: (field: Field) => string;
	onSuccess: (field: Field) => void;
	onError: (field: Field) => void;
}

export const useSignUpFormAuthBoxFormServerValidation = ({
	validateClient,
	getValue,
	onSuccess,
	onError,
}: UseSignUpFormAuthBoxFormServerValidationInput) =>
	useServerFormValidation({
		fields,
		delay: 500,
		validateClient,
		validateServer: async field => {
			const value = getValue(field);
			const users = await usersActions.getAll({ [field]: value });

			return users.length == 0;
		},
		onSuccess,
		onError,
	});
