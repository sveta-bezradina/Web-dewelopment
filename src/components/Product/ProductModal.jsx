import React, { useState, useEffect } from 'react';
import './product.css';

const exchangeRates = {
  USD: 0.027,
  UAH: 1
};

const ProductModal = ({ isOpen, onClose, product, onAddComment, currency }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(product.comments);

  useEffect(() => {
    setComments(product.comments);
  }, [product.comments]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (comment.trim()) {
      const newComments = [...comments, comment];
      setComments(newComments);
      onAddComment(product.id, comment);
      alert(`Ваш відгук: "${comment}" додано успішно!`);
      setComment('');
    }
  };

  const priceInUAH = product.price || 0;
  const exchangeRate = exchangeRates[currency];
  const price = (priceInUAH * exchangeRate).toFixed(2);

  return (
    isOpen && (
      <div className="modal2">
        <div className="modal-content2">
          <span className="close" onClick={onClose}>&times;</span>
          <h4 className="product-title">{product.name}</h4>
          <img src={product.image} alt={product.name} className="product-image" />
          <p className="product-price"> {price} {currency}</p>
          <form onSubmit={handleCommentSubmit}>
            <div className="field">
              <textarea
                placeholder="Leave a comment..."
                className="comment-input"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
            <button className="btn-submit" type="submit">Add Comment</button>
          </form>

          <h5>Comments:</h5>
          <ul className='comments-list'>
            {comments.map((com, index) => (
              <li key={index} className='comment-item'>{com}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default ProductModal;
