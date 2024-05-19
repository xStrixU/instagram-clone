export class UnknownError extends Error {
	constructor(public readonly source: unknown) {
		super();

		if (source instanceof Error) {
			this.message = source.message;
		}

		if (typeof source === 'string') {
			this.message = source;
		}

		this.message = 'Unknown';
	}
}
