import axios from "axios";
import Image from "next/image";
import React from "react";
import Service from "../Service/Service";
import { servicesCollection } from "@/app/lib/mongodb";

export async function generateStaticParams({ route }) {
  const services = await servicesCollection.find({}).toArray();

  return services.map((service) => ({
    slug: service.slug, // jodi slug-based service page thake
  }));
}

const Services = async ({ route }) => {
  const limit = route || 6;
  const services = await servicesCollection.find({}).limit(limit).toArray();

  return (
    <section
      className={`${
        route || "!py-0"
      } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-0`}
    >
      {services.map((service, key) => (
        <Service {...service} key={service._id} id={key} />
      ))}
    </section>
  );
};

export default Services;
