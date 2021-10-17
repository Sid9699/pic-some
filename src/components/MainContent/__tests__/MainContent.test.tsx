import { render } from '@testing-library/react';
import { MainContent } from '../MainContent';

test('renders learn react link', () => {
	const { getByTestId } = render(<MainContent />);
	expect(getByTestId('ps-main-content')).toBeInTheDocument();
});