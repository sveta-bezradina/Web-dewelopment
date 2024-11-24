import React from "react";
import { Form, Input, Button, message } from "antd";
import "./contact.css"


const ContactPage = () => {
  const onFinish = (values) => {
    message.success("Your message has been sent!");
    console.log("Form data:", values);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message!" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactPage;
