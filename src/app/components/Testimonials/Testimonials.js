"use client";

import Image from "next/image";
import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Albino has completely revolutionized our workflow — faster, easier, reliable.",
      name: "Arman Chowdhury",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Their team’s expertise and support made our product design process seamless.",
      name: "Nasrin Akter",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Thanks to Albino, our SEO rankings improved significantly within weeks.",
      name: "Rafiq Islam",
      role: "SEO Specialist",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      text: "Their marketing strategies helped us reach new heights in engagement.",
      name: "Sadia Rahman",
      role: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      text: "The team was incredibly responsive and helped us launch on time.",
      name: "Jahid Hasan",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  return (
    <section className="container">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}

        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="text-center space-y-8 lg:space-y-12">
              {/* <Image
                src={t.logo}
                alt="Client logo"
                className="!w-fit mx-auto"
              /> */}
              <h5>“{t.text}”</h5>
              <div className="flex gap-3 justify-center items-center">
                <aside>
                  <Image
                    src={t.image}
                    width={52}
                    height={52}
                    alt="Client testimonial photo"
                    className="rounded-full"
                  />
                </aside>
                <aside className="text-left">
                  <h6>{t.name}</h6>
                  <p>{t.role}</p>
                </aside>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
