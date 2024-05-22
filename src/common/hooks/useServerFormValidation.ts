import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export interface UseServerFormValidationInput<TField extends string> {
	fields: ReadonlyArray<TField>;
	delay: number;
	validateClient: (field: TField) => Promise<boolean>;
	validateServer: (field: TField) => Promise<boolean>;
	onSuccess: (field: TField) => void;
	onError: (field: TField) => void;
}

export const useServerFormValidation = <TField extends string>({
	fields,
	delay,
	validateClient,
	validateServer,
	onSuccess,
	onError,
}: UseServerFormValidationInput<TField>) => {
	const [validatedFields, setValidatedFields] = useState(
		() =>
			Object.fromEntries(fields.map(field => [field, false])) as Record<
				TField,
				boolean
			>,
	);

	const isServerValidated = Object.values(validatedFields).every(Boolean);

	const setIsFieldValidated = (field: TField, isValid: boolean) =>
		setValidatedFields(fields => ({
			...fields,
			[field]: isValid,
		}));

	const debouncedValidateField = useDebouncedCallback(async (field: TField) => {
		const isClientValid = await validateClient(field);

		if (!isClientValid) {
			setIsFieldValidated(field, true);
			return;
		}

		const isServerValid = await validateServer(field);

		if (isServerValid) {
			onSuccess(field);
		} else {
			onError(field);
		}

		setIsFieldValidated(field, true);
	}, delay);

	const validateField = async (field: TField) => {
		setIsFieldValidated(field, false);
		await debouncedValidateField(field);
	};

	return { validatedFields, isServerValidated, validateField };
};
