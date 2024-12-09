import React from 'react';
import './card.css';

export class Card extends React.Component {
  render() {
    const { src, title, price, addToCart } = this.props;

    return (
      <div className="card">
        <div className="img">
          <img src={src} alt={title} />
        </div>

        <div className="text">
          <p className="h3">{title}</p>
          <p className="p">{price} грн</p>
          <button className="btn" onClick={addToCart}>Add to card</button>
        </div>
      </div>
    );
  }
}
