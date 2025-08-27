import React from "react";
import member1 from "@/app/assets/images/team/team1.jpg";
import member2 from "@/app/assets/images/team/team2.jpg";
import member3 from "@/app/assets/images/team/team3.jpg";
import member4 from "@/app/assets/images/team/team4.jpg";
import member5 from "@/app/assets/images/team/team5.jpg";
import member6 from "@/app/assets/images/team/team6.jpg";
import member7 from "@/app/assets/images/team/team7.jpg";
import Image from "next/image";
import Member from "../Member/Member";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const Team = () => {
  const members = [
    { img: member4, name: "John Doe", role: "CEO" },
    { img: member2, name: "Jane Smith", role: "CTO" },
    { img: member3, name: "Sarah Brown", role: "CFO" },
    { img: member1, name: "Emily Davis", role: "COO" },
    { img: member5, name: "David Wilson", role: "CMO" },
    { img: member6, name: "Mike Johnson", role: "Lead Developer" },
    { img: member7, name: "Chris Lee", role: "UX Designer" },
  ];

  return (
    <section className="container">
      <div className="lg:w-7/12 mx-auto text-center mt-24">
        <h1>Meet our team</h1>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 items-center">
        {members.map((member, index) => (
          <Member {...member} key={index} />
        ))}
        <article>
          <h5>Interested to join our team ?</h5>
          <Link
            className="text-heading-5 text-primary font-black font-rubik flex gap-2 mt-2 items-center"
            href={"/"}
          >
            Apply Now <FaChevronRight />
          </Link>
        </article>
      </div>

      {/* <Image src={about} alt="about" className="pt-10" /> */}
    </section>
  );
};

export default Team;
