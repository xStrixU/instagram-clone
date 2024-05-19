import type { Schema, TypeOf } from 'zod';

export const validateActionPayload = <T extends Schema>(
	schema: T,
	data: unknown,
): TypeOf<T> | null => {
	const result = schema.safeParse(data);

	if (!result.success) {
		return null;
	}

	return result.data;
};
