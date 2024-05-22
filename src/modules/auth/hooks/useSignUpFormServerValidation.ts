import * as usersActions from '@/common/actions/users.actions';
import { useServerFormValidation } from '@/common/hooks/useServerFormValidation';

import type { UseServerFormValidationInput } from '@/common/hooks/useServerFormValidation';

type UseSignUpFormServerValidationInput<TField extends string> = {
	getValue: (field: TField) => string;
} & Omit<UseServerFormValidationInput<TField>, 'validateServer'>;

export const useSignUpFormServerValidation = <TField extends string>({
	fields,
	delay,
	validateClient,
	getValue,
	onSuccess,
	onError,
}: UseSignUpFormServerValidationInput<TField>) =>
	useServerFormValidation({
		fields,
		delay,
		validateClient,
		validateServer: async field => {
			const value = getValue(field);
			const users = await usersActions.getAll({ [field]: value });

			return users.length == 0;
		},
		onSuccess,
		onError,
	});
