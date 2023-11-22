import FunctionalComponent from "../../src/statePropsTest/functionalComponent";
import renderer from 'react-test-renderer';

// NOTE: in functional component can't test directly props and state because accessing from out side the component can be lead a break
// the encapsulation and violating the principle of React
// however we can test it indirectly through method/action/render UI or you can use class component to test directly by instance component

// describe('test instance component', () => {
//     it('test state', () => {
//         const component = renderer.create(<FunctionalComponent />);
//         const tree = component.toJSON();
//         const textComponent = tree.children.find(
//             (node) => node.props.testID === 'countText'
//           );

//           const textComponentValue = textComponent.children[0]
//         return expect(textComponentValue).toBe('Count: 0');
//     })

//     it('test props', () => {
        
//     })
// })


import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';


describe('MyComponent', () => {
  test('increments count when button is pressed', () => {
    const { getByTestId, getByText } = render(<FunctionalComponent />);

    const countText = getByTestId('countText');
    const incrementButton = getByText('Increment');

    expect(countText.props.children.join("")).toBe('Count: 0');

    fireEvent.press(incrementButton);
    expect(countText.props.children.join("")).toBe('Count: 1');
  });
});
