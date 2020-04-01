import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { HeaderDetails } from './styles';
import api from '../../services/api';

export default function Details({ location }) {
  const [place, setPlace] = useState({});

  async function getPlaceDetails() {
    const { id } = location.state;
    const response = await api.get(`/placeInfo/${id}`);

    setPlace(response.data);
  }

  useEffect(() => {
    getPlaceDetails();
  }, []);

  return (
    <>
      <HeaderDetails>
        <h1 className="display-1 font-weight-bold">{place.headerTitle}</h1>
        <h4 className="display-5">{place.headerSubTitle}</h4>
        <p>{place.headerText}</p>
        {/* Social Icons */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-2">
              <i className="fab fa-facebook-f" />
            </div>
            <div className="col-2">
              <i className="fab fa-twitter" />
            </div>
            <div className="col-2">
              <i className="fab fa-google-plus-g" />
            </div>
            <div className="col-2">
              <i className="fab fa-reddit" />
            </div>
            <div className="col-2">
              <i className="fab fa-whatsapp" />
            </div>
            <div className="col-2">
              <i className="fab fa-facebook-messenger" />
            </div>
          </div>
        </div>
      </HeaderDetails>

      <div className="container">
        <ul className="nav nav-tabs">
          {/* About Place Link */}
          <li className="nav-item">
            <a
              href="#aboutPlace"
              className="nav-link active"
              role="tab"
              data-toggle="tab"
            >
              About Place
            </a>
          </li>
          {/* Review Link */}
          <li className="nav-item">
            <a
              href="#reviews"
              className="nav-link"
              role="tab"
              data-toggle="tab"
            >
              Reviews
            </a>
          </li>
          {/* Map Link */}
          <li className="nav-item">
            <a href="#map" className="nav-link" role="tab" data-toggle="tab">
              Map
            </a>
          </li>
        </ul>
        {/* Tab Pane */}
        <div className="tab-content mb-5">
          {/* About Place Tab */}
          <div
            id="aboutPlace"
            className="tab-pane in active text-center mt-5"
            role="tabpanel"
          >
            <h2 className="mb-3">{place.title}</h2>
            <p>{place.description}</p>
            <img
              src={place.img}
              alt={place.title}
              className="img-thumbnail img-fluid"
            />
          </div>
          {/* Reviews */}
          <div className="tab-pane" id="reviews" role="tabpanel">
            {/* <Reviews /> */}
          </div>
          {/* Map */}
          <div className="tab-pane" id="map" role="tabpanel">
            <iframe
              title="iframe top"
              src={place.maps}
              style={{
                border: '0',
                height: '28.125rem',
                width: '100%',
                frameborder: '0',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
