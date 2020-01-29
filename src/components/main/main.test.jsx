import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({adapter: new Adapter()});

it(`Main correctly renders after relaunch`, () => {
  const tree = shallow(<Main />);

  expect(tree).toMatchSnapshot();
});
