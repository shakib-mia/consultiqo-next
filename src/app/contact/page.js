import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";

const page = () => {
  return (
    <>
      <PageHeader
        title={"Contact"}
        description="Get in touch with us for inquiries, support, collaboration, technical assistance, or partnership opportunities."
      />
      <form className="container mx-auto p-4 shadow-xl mt-10 grid grid-cols-1 lg:grid-cols-2"></form>
    </>
  );
};

export default page;
