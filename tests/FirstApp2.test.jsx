import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Testing FirstApp React Component', () => {
    const title = 'Hola, soy Goku';
    const name  = 'hola de nuevo'; 

    test('should show the title inside h2 tag', () => {
        
        render( <FirstApp title={title} />);
        // screen.debug();
        expect( screen.getByText(title)).toBeTruthy();
        //negación
        // expect( screen.getByText(title)).not.toBeTruthy();

        
    });

    test('should pass if a h1 label exist', () => {
        render( <FirstApp title={title} />);
        expect(screen.getByRole("heading", {level:1}).innerHTML).toBe(title);

    });

    test('should pass when find two component with the same text', () => {
        render( 
            <FirstApp title={title} name={name}/>
        );

        expect(screen.getAllByText(name).length).toBe(2);
    });
});