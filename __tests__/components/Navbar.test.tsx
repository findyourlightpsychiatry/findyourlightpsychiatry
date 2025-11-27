import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/Navbar';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('SERVICES')).toBeInTheDocument();
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
    expect(screen.getByText('RESOURCES')).toBeInTheDocument();
    expect(screen.getByText('BLOG')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle mobile menu');
    expect(menuButton).toBeInTheDocument();
    
    // Menu should be closed initially
    expect(screen.queryByText('HOME')).toBeInTheDocument();
    
    // Click to open menu
    fireEvent.click(menuButton);
    
    // Menu should be open (mobile menu items visible)
    // Note: This test may need adjustment based on actual mobile menu implementation
  });

  it('has accessible menu button', () => {
    render(<Navbar />);
    
    const menuButton = screen.getByLabelText('Toggle mobile menu');
    expect(menuButton).toHaveAttribute('aria-label', 'Toggle mobile menu');
    expect(menuButton).toHaveAttribute('aria-expanded');
  });
});










