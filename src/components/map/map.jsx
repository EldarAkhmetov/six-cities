import React from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';


const mapSettings = {
  cityCoords: [52.38333, 4.9],
  zoom: 12,
  iconUrl: `img/pin.svg`,
  iconSize: [27, 39]
};

const defaultLocation = {
  latitude: 0,
  longitude: 0,
  zoom: 13
};

import {
  getCurrentCityOffers,
  getCurrentCity,
  getLocations
} from '../../reducer/offers/selectors';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const {offerCards, currentCity, locations = {}} = this.props;
    const currentLocation = locations.size ?
      locations.get(currentCity) :
      defaultLocation;
    const {latitude, longitude, zoom} = currentLocation;
    const cityCoords = [latitude, longitude];
    this._initMap(cityCoords, zoom, offerCards);
  }

  componentDidUpdate() {
    const {offerCards, currentCity, locations} = this.props;
    const currentLocation = locations.get(currentCity);
    const {latitude, longitude, zoom} = currentLocation;
    const cityCoords = [latitude, longitude];

    this._updateMap(cityCoords, zoom, offerCards);

  }

  render() {
    return (
      <section
        className="cities__map map"
        id="map" ref={this._mapContainer}
      />
    );

  }

  _initMap(cityCoords, zoom, offerCards = []) {
    const {iconUrl, iconSize} = mapSettings;

    this._icon = leaflet.icon({iconUrl, iconSize});

    this._map = leaflet.map(this._mapContainer.current, {
      center: cityCoords,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(cityCoords, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(this._map);

    offerCards.forEach((it) => {
      leaflet.marker([it.location.latitude, it.location.longitude], this._icon).addTo(this._map);
    });
  }

  _updateMap(cityCoords, zoom, offerCards) {
    this._map.setView(cityCoords, zoom);

    offerCards.forEach((it) => {
      leaflet.marker([it.location.latitude, it.location.longitude], this._icon).addTo(this._map);
    });
  }
}

Map.propTypes = {
  currentCity: PropTypes.string,
  offerCards: PropTypes.array,
  locations: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    offerCards: getCurrentCityOffers(state),
    currentCity: getCurrentCity(state),
    locations: getLocations(state)
  };
};

export {Map};

export default connect(mapStateToProps)(Map);
