import React from 'react';
import { create } from "react-test-renderer";
import SpaceXButton from './../component/SpaceXButton/index';

test('Test SpaceX Button Component', () => {
  const component = create(<SpaceXButton 
        isSelected={true}
    />);
  expect(component.toJSON()).toMatchSnapshot()
});