import React from "react";
import { Modal, Button } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {TextInput, NumberInput} from "./Input";
import styles from "./Log.module.css";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Ім'я має бути не менше 3 символів")
    .required("Ім'я є обов'язковим"),
  email: Yup.string()
    .email("Невірний формат електронної пошти")
    .required("Електронна пошта є обов'язковою"),
  password: Yup.string()
    .min(8, "Пароль має бути не менше 8 символів")
    .matches(/[A-Z]/, "Пароль повинен містити хоча б одну велику літеру")
    .matches(/[^a-zA-Z]/, "Пароль повинен містити хоча б один знак, який не є літерою")
    .required("Пароль є обов'язковим"),
  number: Yup.number()
    .min(10, "Число має бути не менше 10")
    .test(
      "is-even",
      "Число повинно бути парним",
      (value) => value % 2 === 0
    )
    .required("Це поле є обов'язковим"),
});

const RegisterModal = ({ isOpen, onClose, onLogin, onSwitchToLogin }) => {
  const handleSubmit = (values) => {
    console.log("Registration successful!", values);
    onLogin();
    onClose();
  };

  return (
    <Modal
      title="Sign Up"
      visible={isOpen}
      onCancel={onClose}
      footer={null}
      width={400}
    >
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <TextInput
            name="username"
            label="Username"
            placeholder="Enter your username"
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <TextInput
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

            <NumberInput
                name="number"
                label="Введіть число:"
                placeholder="Наприклад, 12"
                type="number"
            />
            <Button
                type="primary"
                htmlType="submit"
                className={styles.form_btn}
                block
            >
                Register
            </Button>
        </Form>
      </Formik>
      <p className={styles.sign_up_label}>
        Already have an account?{" "}
        <span className={styles.login_link} onClick={onSwitchToLogin}>
          Log in
        </span>
      </p>
    </Modal>
  );
};

export default RegisterModal;
