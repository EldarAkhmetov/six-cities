import React from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

import offersMock from '../../mocks/offers.js';
import {getOffersByCity} from '../../utils/utils.js';
import {locations} from '../../reducer/reducer.js';

const mapSettings = {
  cityCoords: [52.38333, 4.9],
  zoom: 12,
  iconUrl: `img/pin.svg`,
  iconSize: [27, 39]
};

class Map extends React.Component {
  constructor(props) {
    super(props);

    this._mapContaineer = React.createRef();
  }

  componentDidMount() {
    const {offerCards, currentCity} = this.props;
    const {coords} = locations[currentCity];

    const {zoom, iconUrl, iconSize} = mapSettings;

    this._icon = leaflet.icon({
      iconUrl,
      iconSize,
    });

    this._map = leaflet.map(this._mapContaineer.current, {
      center: coords,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(coords, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);

    for (const offerCard of offerCards) {
      leaflet
      .marker(offerCard.coordinates, this._icon)
      .addTo(this._map);
    }
  }

  componentDidUpdate() {
    const {offerCards, currentCity} = this.props;
    const {zoom} = mapSettings;
    const {coords} = locations[currentCity];

    this._map.flyTo(coords, zoom);

    for (const offerCard of offerCards) {
      leaflet
      .marker(offerCard.coordinates, this._icon)
      .addTo(this._map);
    }
  }

  render() {
    return <section className="cities__map map" id="map" ref={this._mapContaineer}></section>;
  }
}

Map.propTypes = {
  currentCity: PropTypes.string.isRequired,
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

const mapStateToProps = (state) => {
  return {
    offerCards: getOffersByCity(offersMock, state.currentCity),
    currentCity: state.currentCity
  };
};

export {Map};

export default connect(mapStateToProps)(Map);
