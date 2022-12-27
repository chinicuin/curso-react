import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Testing Counter App Component', () => {
    const value = 100;

    test('should match the snapshot', () => {
        render(<CounterApp value={ value }></CounterApp>);
        expect(screen).toMatchSnapshot();
    });

    test('should match with preset value', () => {
        render(<CounterApp value={ value }></CounterApp>);
        // expect( screen.getByText(100)).toBeTruthy();
        expect( screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    });

    test('should simulate click on button +1', () => {
        render(<CounterApp value={ value }></CounterApp>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('should simulate click on button -1', () => {
        render(<CounterApp value={ value }></CounterApp>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('should simulate click on button Reset', () => {
        render(<CounterApp value={ value }></CounterApp>);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        // value = 97
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
        
        expect(screen.getByText(value)).toBeTruthy();
    });
});