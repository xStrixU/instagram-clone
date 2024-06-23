'use client';

import { useState } from 'react';

import { SignUpAuthBoxProvider } from './SignUpAuthBox.provider';
import { steps } from './SignUpAuthBox.steps';
import { SignUpAuthBoxStoreProvider } from './SignUpAuthBox.store';

export const SignUpAuthBox = () => {
	const [step, setStep] = useState(0);

	const StepComponent = steps[step];

	return (
		<SignUpAuthBoxStoreProvider>
			<SignUpAuthBoxProvider>
				<StepComponent
					previousStep={() => setStep(step => step - 1)}
					nextStep={() => setStep(step => step + 1)}
				/>
			</SignUpAuthBoxProvider>
		</SignUpAuthBoxStoreProvider>
	);
};
