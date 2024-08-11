import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
    it('should have Docs', () => {
        render(<Home />);
        const myElem = screen.getByText('Docs');
        expect(myElem).toBeInTheDocument();
    });

    it('should contain "information"', () => {
        render(<Home />);
        const myElem = screen.getByText(/information/i);
        expect(myElem).toBeInTheDocument();
    });

    it('should contain a heading', () => {
        render(<Home />);
        const myElem = screen.getByRole('heading', { name: /Docs/i });
        expect(myElem).toBeInTheDocument();
    });
});
