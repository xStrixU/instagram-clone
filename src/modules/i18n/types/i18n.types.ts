import type { locales } from '../i18n';

import type { Params } from '@/common/types/next.types';

export type Locale = keyof typeof locales;

export type LocaleParams<T extends string = never> = Params<T | 'locale'>;
