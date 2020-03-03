import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import reducer from '../../reducer/reducer';

const store = createStore(reducer);

it(`SignIn correctly renders`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn email={`email`} password={`password`} />
        </BrowserRouter>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

