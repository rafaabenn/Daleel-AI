import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const heroTitle = screen.getByText(/le bon outil ia pour chaque besoin/i);
  expect(heroTitle).toBeInTheDocument();
});