import axios from "axios";
import Image from "next/image";
import React from "react";
import Service from "../Service/Service";

const Services = async () => {
  // const services = [];
  const { data: services } = await axios.get(
    "https://templatehearth-be.onrender.com/services"
  );
  // console.log(services);
  return (
    <>
      {services.slice(0, 6).map((service, key) => (
        <Service {...service} key={service._id} id={key} />
      ))}
    </>
  );
};

export default Services;
