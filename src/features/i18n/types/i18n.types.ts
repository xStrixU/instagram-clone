import type { locales } from '../i18n';
import type {
	MessageKeys,
	NamespaceKeys,
	NestedKeyOf,
	NestedValueOf,
} from 'next-intl';

import type { Params } from '@/common/types/next.types';

export type Locale = (typeof locales)[number];

export type LocaleParams<T extends string = never> = Params<T | 'locale'>;

export type NamespaceMessageKeys<
	Namespace extends NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>>,
> = MessageKeys<
	NestedValueOf<
		{
			'!': IntlMessages;
		},
		`!.${Namespace}`
	>,
	NestedKeyOf<
		NestedValueOf<
			{
				'!': IntlMessages;
			},
			`!.${Namespace}`
		>
	>
>;
