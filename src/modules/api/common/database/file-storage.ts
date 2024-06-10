import {
	CopyObjectCommand,
	DeleteObjectCommand,
	PutObjectCommand,
	S3Client,
} from '@aws-sdk/client-s3';
import * as fs from 'node:fs/promises';

import { env } from '@/common/lib/env';

const s3 = new S3Client({
	region: env.S3_REGION,
	credentials: {
		accessKeyId: env.S3_ACCESS_KEY,
		secretAccessKey: env.S3_ACCESS_SECRET,
	},
});

interface UploadFileInput {
	name: string;
	body: Buffer;
}

export const uploadFile = async ({ name, body }: UploadFileInput) => {
	const command = new PutObjectCommand({
		Bucket: env.S3_BUCKET_NAME,
		Key: name,
		Body: body,
	});

	await s3.send(command);
};

interface UploadFileFromUrlInput {
	url: string;
	name: string;
}

export const uploadFileFromUrl = async ({
	url,
	name,
}: UploadFileFromUrlInput) => {
	const arrayBuffer = await fetch(url).then(res => res.arrayBuffer());

	await uploadFile({
		name,
		body: Buffer.from(arrayBuffer),
	});
};

interface UploadFileFromLocalInput {
	path: string;
	name: string;
}

export const uploadFileFromLocal = async ({
	path,
	name,
}: UploadFileFromLocalInput) => {
	const body = await fs.readFile(path);

	await uploadFile({ name, body });
};

interface CopyFileInput {
	src: string;
	dest: string;
}

export const copyFile = async ({ src, dest }: CopyFileInput) => {
	const bucket = env.S3_BUCKET_NAME;

	const command = new CopyObjectCommand({
		Bucket: bucket,
		CopySource: `${bucket}/${src}`,
		Key: dest,
	});

	await s3.send(command);
};

export const deleteFile = async (name: string) => {
	const command = new DeleteObjectCommand({
		Bucket: env.S3_BUCKET_NAME,
		Key: name,
	});

	await s3.send(command);
};

interface MoveFileInput {
	src: string;
	dest: string;
}

export const moveFile = async ({ src, dest }: MoveFileInput) => {
	await copyFile({ src, dest });
	await deleteFile(src);
};
