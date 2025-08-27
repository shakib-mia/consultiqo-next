import React from "react";
import NewsletterForm from "../NewsletterForm/NewsletterForm";

const Newsletter = () => {
  return (
    // <!-- Subscribe to newsletter -->
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
      <aside data-animate="fade-in-left">
        <h4>Subscribe to our newsletter to get latest news on your inbox.</h4>
      </aside>

      <NewsletterForm />
    </section>
  );
};

export default Newsletter;
