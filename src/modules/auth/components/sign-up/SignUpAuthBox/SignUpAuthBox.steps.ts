import { SignUpBirthdayAuthBox } from './SignUpBirthdayAuthBox/SignUpBirthdayAuthBox';
import { SignUpConfirmationCodeAuthBox } from './SignUpConfirmationCodeAuthBox/SignUpConfirmationCodeAuthBox';
import { SignUpFormAuthBox } from './SignUpFormAuthBox/SignUpFormAuthBox';

export type StepsProps = Readonly<{
	previousStep: () => void;
	nextStep: () => void;
}>;

export const steps = [
	SignUpFormAuthBox,
	SignUpBirthdayAuthBox,
	SignUpConfirmationCodeAuthBox,
];
