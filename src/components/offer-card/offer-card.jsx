import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = (props) => {
  const {card, activeItemId, itemClickHandler} = props;
  const {id, is_premium: isPremium, preview_image: previewImage, price, type, title, isFavorite, rating} = card;

  const buttonClasses = [`place-card__bookmark-button`, `button`];

  if (isFavorite) {
    buttonClasses.push(`place-card__bookmark-button--active`);
  }
  return (
    <article
      className={`cities__place-card place-card${
        activeItemId === id ? ` active` : ``
      }`}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image"
            src={previewImage || `https://place-hold.it/260x200`}
            width="260"
            height="200"
            alt="Place image"
            onClick={(evt) => {
              evt.preventDefault();
              itemClickHandler(id);
            }}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={buttonClasses.join(` `)} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  activeItemId: PropTypes.number,
  card: PropTypes.object.isRequired,
  itemClickHandler: PropTypes.func,
};

export default OfferCard;
