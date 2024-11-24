import React, { useState } from 'react';
import './transitionProduct.css';
import styles from './Product.module.css';
import useCurrency from './../../hooks/useCurrency';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Formik, Form, Field } from "formik";
import { Input, Button } from "antd";

const ProductModal = ({ isOpen, onClose, product, onAddComment, currency, updateProductComments }) => {
  // const [comment, setComment] = useState('');
  const [comments, setComments] = useState(product.comments);
  const { price } = useCurrency(product, currency);

  // const handleCommentSubmit = (e) => {
  //   e.preventDefault();
  //   if (comment.trim()) {
  //     const newComments = [...comments, comment];
  //     setComments(newComments);
  //     onAddComment(product.id, comment);
  //     updateProductComments(product.id, newComments);
  //     alert(`Ваш відгук: "${comment}" додано успішно!`);
  //     setComment('');
  //   }  else {
  //     alert("Будь ласка, введіть коментар перед відправкою.");
  //   }
  // };

  const handleCommentSubmit = (comment, { resetForm }) => {
    if (comment.trim()) {
      const newComments = [...comments, comment];
      setComments(newComments);
      onAddComment(product.id, comment);
      updateProductComments(product.id, newComments);
      alert(`Ваш відгук: "${comment}" додано успішно!`);
      resetForm(); // Очищаємо форму після успішного додавання
    } else {
      alert("Будь ласка, введіть коментар перед відправкою.");
    }
  };

  const handleCommentDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    updateProductComments(product.id, updatedComments);
  };

  return (
    isOpen && (
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <h4 className={styles.product_title}>{product.name}</h4>
          <img src={product.image} alt={product.name} className={styles.product_image} />
          <p className={styles.product_price}>{price} {currency}</p>

          {/* <form onSubmit={handleCommentSubmit}>
            <div className={styles.field}>
              <textarea
                placeholder="Leave a comment..."
                className={styles.comment_input}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
            <button className={styles.btn_submit} type="submit">Add Comment</button>
          </form> */}

          <Formik
                initialValues={{ comment: "" }}
                onSubmit={(values, { resetForm }) => {
                  handleCommentSubmit(values.comment, { resetForm });
                }}
                className={styles.field}
              >
                <Form>
                  <Field name="comment">
                    {({ field }) => <Input {...field} placeholder="Enter your comment" className={styles.comment_input}/>}
                  </Field>
                  <Button type="primary" htmlType="submit" className={styles.btn_submit}>Submit</Button>
                </Form>
          </Formik>

          <h5>Comments:</h5>
          <ul className={styles.comments_list}>
          <TransitionGroup>
              {comments.map((com, index) => (
                <CSSTransition
                  key={index}
                  timeout={400}
                  classNames="comment-item"
                >
                  <li className={styles.comment_item}>
                    <span>{com}</span>
                    <button
                      onClick={() => handleCommentDelete(index)}
                      className={styles.delete_btn}
                    >
                      Delete
                    </button>
                  </li>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>
        </div>
      </div>
    )
  );
};

export default ProductModal;

