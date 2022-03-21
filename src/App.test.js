import { render, screen} from '@testing-library/react';
import Nav from './Components/Nav';

test('check for the navbar components elements', () => {
  render(<Nav/>);
  const ButtonElement = screen.getByText(/Projects/i);
  expect(ButtonElement).toBeInTheDocument();
})
