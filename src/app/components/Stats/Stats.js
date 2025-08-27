import React from "react";

const Stats = () => {
  return (
    // <!-- Stats Section -->
    <section className="border-b border-light">
      {/* <!-- Container: Grid layout for stats --> */}
      <div className="container grid grid-cols-2 text-center lg:text-left lg:grid-cols-3 gap-4 lg:gap-20">
        {/* <!-- Stat Item 1 --> */}
        <aside className="flex items-center gap-2 lg:gap-7 flex-col lg:flex-row">
          {/* <!-- Stat Value --> */}
          <h2 data-animate="fade-in-up">1M+</h2>
          {/* <!-- Stat Description --> */}
          <aside data-animate="fade-in-up" data-delay="100">
            Customers visit Albino every month
          </aside>
        </aside>

        {/* <!-- Stat Item 2 --> */}
        <aside className="flex items-center gap-2 lg:gap-7 flex-col lg:flex-row">
          {/* <!-- Stat Value --> */}
          <h2 data-animate="fade-in-up" data-delay="200">
            93%
          </h2>
          {/* <!-- Stat Description --> */}
          <aside data-animate="fade-in-up" data-delay="300">
            Satisfaction rate from our customers.
          </aside>
        </aside>

        {/* <!-- Stat Item 3 --> */}
        <aside className="flex items-center gap-2 lg:gap-7 flex-col lg:flex-row">
          {/* <!-- Stat Value --> */}
          <h2 data-animate="fade-in-up" data-delay="400">
            4.9
          </h2>
          {/* <!-- Stat Description --> */}
          <aside data-animate="fade-in-up" data-delay="500">
            Average customer ratings out of 5.00!
          </aside>
        </aside>
      </div>
    </section>
  );
};

export default Stats;
