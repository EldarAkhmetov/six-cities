import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

it(`Map correctly renders`, () => {
  const props = {
    offerCards: [],
    leaflet: {
      map() {
        return {
          setView: jest.fn(),
        };
      },
      icon: jest.fn(),
      tileLayer() {
        return {
          addTo: jest.fn(),
        };
      },
      marker() {
        return {
          addTo: jest.fn(),
        };
      },
    },
  };

  const tree = renderer
    .create(<Map {...props}/>).toJSON();

  expect(tree).toMatchSnapshot();

});
