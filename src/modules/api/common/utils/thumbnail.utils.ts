import { env } from '@/common/lib/env';

export const createThumbnailURL = (name: string) =>
	`${env.THUMBNAIL_ENDPOINT}/${name}`;
