import React from 'react';

import App from '../../src/components/App.jsx';


/**
 * Test using Mocha
 */
describe('<App />', () => {
  it('renders', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('Card')).to.have.length(4);
  });
});