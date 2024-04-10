import { forwardRef, useId } from 'react';

import { InputRightSection } from './InputRightSection';

import type { ChangeEventHandler, ReactNode } from 'react';

type InputProps = Readonly<{
	type?: 'text' | 'password';
	placeholder: string;
	value?: string;
	autoComplete?: 'username' | 'email' | 'current-password' | 'new-password';
	rightSection?: ReactNode;
	validate?: boolean;
	isValid?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ type = 'text', placeholder, rightSection, validate, isValid, ...props },
		ref,
	) => {
		const id = useId();

		return (
			<div className="relative flex h-10 items-center rounded border border-stroke bg-secondary text-xs focus-within:border-stroke-focus">
				<input
					id={id}
					type={type}
					ref={ref}
					placeholder=" "
					className="peer h-full min-w-0 grow bg-transparent px-2 pt-3 text-primary outline-none placeholder-shown:pt-0"
					{...props}
				/>
				<label
					htmlFor={id}
					className="pointer-events-none absolute left-2 right-0 top-1/2 origin-left -translate-y-4 scale-90 truncate text-secondary transition-transform peer-placeholder-shown:right-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100"
				>
					{placeholder}
				</label>
				{(validate || rightSection) && (
					<InputRightSection
						validate={validate}
						isValid={isValid}
						rightSection={rightSection}
					/>
				)}
			</div>
		);
	},
);

Input.displayName = 'Input';
