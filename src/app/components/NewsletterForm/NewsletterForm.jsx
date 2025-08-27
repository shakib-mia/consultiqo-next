"use client";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const NewsletterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // alert(e.target.email.value);
    axios
      .post("http://localhost:5000/newsletter", {
        email: e.target.email.value,
        template: "Consultiqo Full Site",
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: err.response.statusText,
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <form
      className="flex gap-2 items-center"
      id="newsletter-form"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        className="h-fit"
        id="email"
        placeholder="Enter Your Email Address"
        data-animate="fade-in-right"
      />
      <button
        type="submit"
        className="h-fit"
        data-animate="fade-in-right"
        data-delay="500"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
