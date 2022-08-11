import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contactImg">
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="contactDetails">
          <div>
            {" "}
            <a href="https://www.instagram.com/p/CfEOla7Dl1e/?utm_source=ig_web_copy_link">
              <img
                src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
              />{" "}
              Instagram{" "}
            </a>{" "}
          </div>
          <div>
            {" "}
            <a href="http://www.linkedin.com/in/vaibhav-mathur-a63940231">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1633510044266-8d7b1ee9f501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />{" "}
              Linkden
            </a>
          </div>
          <div>
            {" "}
            <a href="mailto: mathurvaibhav010@gmail.com">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1570610183363-c7531f3eaa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                alt=""
              />{" "}
              E-mail{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
