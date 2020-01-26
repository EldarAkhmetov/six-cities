import React from 'react';
import PropTypes from 'prop-types';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offerCards} = this.props;
    const {leaflet} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39],
    });

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    for (const offerCard of offerCards) {
      leaflet
      .marker(offerCard.coordinates, {icon})
      .addTo(map);
    }
  }

  render() {
    return <section className="cities__map map" id="map"></section>;
  }
}

Map.propTypes = {
  leaflet: PropTypes.object.isRequired,
  offerCards: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired).isRequired,
};

export default Map;
