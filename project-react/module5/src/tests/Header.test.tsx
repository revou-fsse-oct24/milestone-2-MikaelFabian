// tests/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  it('renders the header with the correct title', () => {
    render(<Header />);
    expect(screen.getByText(/My Store/i)).toBeInTheDocument();
  });
});