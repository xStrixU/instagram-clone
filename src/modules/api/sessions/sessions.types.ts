export interface Session {
	id: string;
	userId: string;
	fresh: boolean;
	expiresAt: Date;
}
