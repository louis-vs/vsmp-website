import { render, screen } from '@testing-library/react';
import App from './App';

describe('displaying app', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders coming soon text', () => {
    const comingSoonElement = screen.getByText(/coming soon/i);
    expect(comingSoonElement).toBeInTheDocument();
  });

});
