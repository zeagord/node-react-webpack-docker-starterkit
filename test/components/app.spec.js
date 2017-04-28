import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../../src/components/App.jsx';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
