import React from 'react';
import Main from './main/main.jsx';
import PropTypes from 'prop-types';


const App = (props) => {
  const {offerCards} = props;

  return (
    <Main
      offerCards = {offerCards}
    />
  );
};

App.propTypes = {
  offerCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool.isRequired,
    previewImage: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.title,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  })),
};

export default App;
