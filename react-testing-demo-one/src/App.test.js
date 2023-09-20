import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn about deque link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-about-deque-link');
  expect(linkElement).toBeInTheDocument();
});

test('ensures url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-about-deque-link');
  expect(linkElement.href).toContain('https://www.deque.com/');
});
