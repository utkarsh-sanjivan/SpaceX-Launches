import React from 'react';
import { create } from "react-test-renderer";
import LaunchList from './../component/LaunchList/index';

test('Test SpaceX Launch List Component', () => {
  const component = create(<LaunchList 
        launches={[]}
        filterClicked={() => {}}
    />);
  expect(component.toJSON()).toMatchSnapshot()
});