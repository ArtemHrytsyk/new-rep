import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('renders header text', () => {
  render(<App />);
  const headerText = screen.getByText(/Feedback statistic widget/i);
  expect(headerText).toBeInTheDocument();
});
