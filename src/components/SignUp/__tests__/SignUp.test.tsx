import { render } from '@testing-library/react';
import { SignUp } from '../SignUp';

describe('SignUp Component tests', () => {

	test('should render navbar component', () => {
		const { getByTestId } = render(<SignUp />);
		expect(getByTestId('ps-signup')).toBeInTheDocument();
	});

	test('should render Hello Friend! message', () => {
		const { getByText } = render(<SignUp />);
		expect(getByText(/Hello Friend!/i)).toBeInTheDocument();
	});

	test('should render Forgot password? message', () => {
		const { getByText } = render(<SignUp />);
		expect(getByText(/Already have an account\? Login./i)).toBeInTheDocument();
	});

});