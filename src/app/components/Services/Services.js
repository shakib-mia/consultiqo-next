import axios from "axios";
import Image from "next/image";
import React from "react";
import Service from "../Service/Service";
import { servicesCollection } from "@/app/lib/mongodb";

const Services = async () => {
  const services = await servicesCollection.find({}).toArray();
  return (
    <>
      {services.slice(0, 6).map((service, key) => (
        <Service {...service} key={service._id} id={key} />
      ))}
    </>
  );
};

export default Services;
