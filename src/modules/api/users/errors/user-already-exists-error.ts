import { ResourceAlreadyExistsError } from '../../common/errors/resources/resource-already-exists-error';

export class UserAlreadyExistsError extends ResourceAlreadyExistsError {
	constructor(public readonly target: 'username' | 'email') {
		super();
	}
}
