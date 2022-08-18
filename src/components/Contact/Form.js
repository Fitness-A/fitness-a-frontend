/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React, { useState } from "react";
import ContactBg from "../Image/contactBg.jpg";
import axios from "axios";
import Button from "../GlobalComponents/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form(text) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function formSubmission(e) {
    e.preventDefault();
    if (!name || !email) {
      toast.error("📩Email and 🙍Name are mandatory!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const data = {
      userName: name,
      userEmail: email,
      subject: subject,
      message: message,
    };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    // It may impact on server URL when shifting this code to live because this is based on localhost
    axios
      .post("http://localhost:5000/api/contact", data, { headers: headers })
      .then((res) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        toast.success("Message sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }
  return (
    <div css={styles} className="formContainer">
      <ToastContainer />
      <form onSubmit={formSubmission}>
        <input
          name="username"
          type="text"
          placeholder="Your Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="useremail"
          type="text"
          placeholder="Your Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className="btn css-12kt7ua-Button">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

const styles = css`
  width: 100%;
  padding: 80px;
  min-height: 60vh;
  display: flex;
  background: url("${ContactBg}") no-repeat center/cover;
  form {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    padding: 40px;
    border-radius: 6px;
    input,
    textarea {
      margin-bottom: 20px;
      padding: 14px;
      border: 1px solid #ddd;
      outline: none;
      color: #7a7a7a;
      &::placeholder {
        color: #7a7a7a;
      }
    }
    input {
      width: 47%;
      &:nth-of-type(3) {
        width: 100%;
      }
    }
    textarea {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    padding: 80px 30px;
    form {
      max-width: 900px;
    }
  }
`;

export default Form;