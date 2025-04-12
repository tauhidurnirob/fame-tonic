import { render, screen } from '@testing-library/react';
import CustomButton from '@/components/CustomButton';

describe('CustomButton', () => {
  it('renders with the given text', () => {
    render(<CustomButton text="Get Started" />);
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  it('has secondary color and boxShadow style', () => {
    render(<CustomButton text="Join Now" />);
    const button = screen.getByRole('button', { name: /join now/i });
    expect(button).toHaveStyle({
      fontWeight: '700',
      boxShadow: '2px 2px 10px 0px #00E7F9',
    });
  });

  it('renders the arrow icon', () => {
    render(<CustomButton text="Next" />);
    // Find the button first
    const button = screen.getByRole('button', { name: /next/i });
    // Check if it contains an SVG (assuming ArrowIcon renders as <svg>)
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});