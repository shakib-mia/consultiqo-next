import { servicesCollection } from "@/app/lib/mongodb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RestServices = async ({ slug }) => {
  const restServices = await servicesCollection
    .find({ slug: { $ne: slug } })
    .toArray();

  if (restServices.length > 0) {
    return (
      <div className="space-y-4">
        {restServices.map((item) => (
          <Link
            href={`/services/${item.slug}`}
            className="flex gap-2 flex-col lg:flex-row items-center"
            key={item._id}
          >
            <Image
              src={item.image}
              className="w-full lg:w-1/3 lg;aspect-square rounded-lg object-cover"
              width={156}
              height={156}
              alt={item.slug}
            />

            <aside className="lg:w-2/3">
              <h6 className="font-medium">{item.title}</h6>
              <p title={item.shortDescription}>
                {item.shortDescription.slice(0, 30)}...
              </p>
            </aside>
          </Link>
        ))}
      </div>
    );
  } else {
    <span>loading...</span>;
  }
};

export default RestServices;
