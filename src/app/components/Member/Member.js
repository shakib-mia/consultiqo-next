import Image from "next/image";
import React from "react";

const Member = ({ img, name, role, id }) => {
  return (
    <article data-animate="fade-in-up" data-delay={(id % 4) * 100}>
      <Image
        width={250}
        height={325}
        src={img.src}
        alt={name}
        className="w-full h-auto rounded-lg"
      />
      <h6 className="mt-4 font-medium">{name}</h6>
      <p className="text-gray-600">{role}</p>
    </article>
  );
};

export default Member;
