// "use client";

import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Head from "next/head";
import ContactForm from "../components/ContactForm/ContactForm";

export const metadata = {
  title: "Contact - Consultiqo",
  description:
    "Get in touch with us for inquiries, support, collaboration, technical assistance, or partnership opportunities.",
};

const page = () => {
  return (
    <section className="!pt-0">
      <Head>
        <title>Contact - Consultiqo</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries, support, collaboration, technical assistance, or partnership opportunities."
        />
      </Head>
      <PageHeader
        title={"Contact"}
        description="Get in touch with us for inquiries, support, collaboration, technical assistance, or partnership opportunities."
      />

      <ContactForm />
    </section>
  );
};

export default page;
