import React from 'react';
import { create } from "react-test-renderer";
import SpaceXCard from './../component/SpaceXCard/index';

test('Test SpaceX Card Component', () => {
  const component = create(<SpaceXCard 
        launchDetails={{ links: {} }}
    />);
  expect(component.toJSON()).toMatchSnapshot()
});