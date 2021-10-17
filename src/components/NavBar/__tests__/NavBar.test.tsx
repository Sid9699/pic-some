import { render } from '@testing-library/react';
import { NavBar } from '../NavBar';

describe('NavBar Component tests', () => {

	test('should render navbar component', () => {
		const { getByTestId } = render(<NavBar />);
		expect(getByTestId('ps-navbar')).toBeInTheDocument();
	});

	test('should render correct children', () => {
		const { getByTestId } = render(<NavBar>children</NavBar>);
		expect(getByTestId('ps-navbar')).toBeInTheDocument();
	});

});