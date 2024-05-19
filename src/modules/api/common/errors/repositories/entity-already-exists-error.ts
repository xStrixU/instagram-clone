export class EntityAlreadyExistsError extends Error {
	constructor(public readonly target?: string) {
		super();
	}
}
