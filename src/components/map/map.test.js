import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Map} from './map.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Map correctly renders`, () => {
  const props = {
    offerCards: [],
    currentCity: `Amsterdam`
  };

  const tree = mount(<Map {...props} />);

  expect(tree).toMatchSnapshot();

});
