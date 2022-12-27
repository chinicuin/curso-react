import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Testing FirstApp React Component', () => {
    // test('the test should match the snapshot', () => {
    //     const title = 'Hola, soy Goku';
    //     const { container } = render( <FirstApp title={title} />);

    //     expect( container ).toMatchSnapshot();
    // });

    test('should show the title inside h2 tag', () => {
        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={title} />);

        expect( getByText(title)).toBeTruthy();

        // const h2 = container.querySelector('h2');
        // expect(h2.innerHTML).toContain(title);

        expect( getByTestId('test-title').innerHTML).toBe(title);
    });

    test('should pass when find two component with the same text', () => {
        const title = 'Hola, soy Goku';
        const name = 'Juancho';
        const { getAllByText } = render( 
            <FirstApp title={title} name={name}/>
        );

        expect(getAllByText(name).length).toBe(2);
    });
});