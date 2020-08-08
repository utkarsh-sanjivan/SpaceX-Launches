import React from 'react';
import { create } from "react-test-renderer";
import Filter from './../component/Filter/index';

test('Test SpaceX FIlter Component', () => {
  const component = create(<Filter 
        filterObj={{
            launch_year: '',
            launch_success: '',
            land_success: '',
        }}
        filterClicked={() => {}}
    />);
  expect(component.toJSON()).toMatchSnapshot()
});