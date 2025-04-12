import { render, screen } from '@testing-library/react';
import Banner from '@/components/Banner';

describe('Banner', () => {
  it('renders the banner text correctly', () => {
    render(<Banner />);
    
    expect(
      screen.getByText(/fresh beginnings sale/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/extra 25% off, limited spots/i)
    ).toBeInTheDocument();
  });

  it('contains the 🚀 emoji', () => {
    render(<Banner />);
    expect(screen.getByText((content) => content.includes('🚀'))).toBeInTheDocument();
  });
});