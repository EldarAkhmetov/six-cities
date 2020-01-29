import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({adapter: new Adapter()});


it(`App correctly renders after launch`, () => {
  const tree = shallow(<App />);

  expect(tree).toMatchSnapshot();
});
