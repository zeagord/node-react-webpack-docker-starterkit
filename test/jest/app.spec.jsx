import React from 'react';
import Menu from '../../src/components/Menu.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Menu />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});