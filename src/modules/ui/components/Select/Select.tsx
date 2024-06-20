import ChevronDownIcon from '@/modules/ui/assets/icons/chevron-down.svg';

import type { ChangeEventHandler, ReactNode } from 'react';

type SelectValue = string | number;

type SelectProps = Readonly<{
	options: { value: SelectValue; children: ReactNode }[];
	value?: SelectValue;
	onChange?: ChangeEventHandler<HTMLSelectElement>;
}>;

export const Select = ({ options, ...props }: SelectProps) => (
	<div className="relative inline-block w-fit text-secondary">
		<ChevronDownIcon
			aria-hidden
			className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
		/>
		<select
			className="h-9 appearance-none rounded border border-stroke bg-primary pl-2 pr-6 text-sm outline-none"
			{...props}
		>
			{options.map(({ value, children }) => (
				<option key={value} value={value}>
					{children}
				</option>
			))}
		</select>
	</div>
);
