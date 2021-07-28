import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});

test('render submit button', () => {
  const submitButton = screen.queryByText('submit');
  expect(submitButton).not.toBeInTheDocument();
});
