import React from "react";
import { useField } from "formik";
import { Input } from "antd";
import styles from "./Log.module.css";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <Input {...field} {...props} className={styles.input}/>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const NumberInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  
    return (
      <div style={{ marginBottom: "1rem" }}>
        {label && <label style={{ display: "block", marginBottom: "0.5rem" }}>{label}</label>}
        <Input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div style={{ color: "red", marginTop: "0.5rem" }}>{meta.error}</div>
        ) : null}
      </div>
    );
  };

