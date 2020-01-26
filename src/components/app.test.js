import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import leaflet from 'leaflet';

leaflet.map = () => ({setView: jest.fn()});
leaflet.tileLayer = () => ({addTo: jest.fn()});
leaflet.marker = () => ({addTo: jest.fn()});
leaflet.icon = jest.fn();

it(`App correctly renders after launch`, () => {
  const props = {
    offerCards: []
  };

  const tree = renderer
    .create(<App {...props}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
