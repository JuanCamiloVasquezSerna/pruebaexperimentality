import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import Header from './components/Header';

test('Página Home', () => {
    render(<App />);
    const linkElement = screen.getByText(/PRODUCTOS MÁS BUSCADOS/i);
    expect(linkElement).toBeInTheDocument();
});

test('Validar carrito vacío', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId("header__acciones-cart"));
    expect(screen.getByText(/¡El carrito de compras está vacío!/i)).toBeInTheDocument();
});