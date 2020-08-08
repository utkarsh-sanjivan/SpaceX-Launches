import React from 'react';
import { create } from "react-test-renderer";
import Loader from './../component/Loader/index';

test('Test SpaceX Loader Component', () => {
  const component = create(<Loader />);
  expect(component.toJSON()).toMatchSnapshot()
});