import React from "react";

export default function FleetAndValues() {
  const fleetItems = [
    {
      title: "Heavy-Duty Cargo Transportation",
      category: "911 Trucks",
      description:
        "Our 911 trucks support the movement of goods, equipment and commercial cargo, providing dependable solutions for heavy-duty transportation needs across Nigeria.",
      image: "/emma/img/911truck.png",
      alt: "911 Trucks",
    },
    {
      title: "Bulk Material Transportation",
      category: "Tippers",
      description:
        "Supporting the transportation of sand, gravel, stones and other bulk materials for construction and commercial projects.",
      image: "/emma/img/Tippers.png",
      alt: "Tippers",
    },
    {
      title: "Long-Distance Passenger Transportation",
      category: "Coach Buses",
      description:
        "Spacious seating, passenger comfort and luggage capacity for intercity transportation across Nigeria.",
      image: "/emma/img/COACHBUSES.png",
      alt: "Coach Buses",
    },
    {
      title: "Passenger Transportation",
      category: "Buses",
      description:
        "Reliable transportation solutions supporting passenger movement across various routes and destinations.",
      image: "/emma/img/PassengerTransportation.png",
      alt: "Buses",
    },
    {
      title: "Business & Logistics Operations",
      category: "Commercial Vehicles",
      description:
        "Supporting delivery, logistics, transportation and operational activities across our business network.",
      image: "/emma/img/CommercialVehicles.png",
      alt: "Commercial Vehicles",
    },
    {
      title: "Transportation & Business Support",
      category: "Cars",
      description:
        "Supporting mobility, transportation and operational requirements within our business ecosystem.",
      image: "/emma/img/Cars.png",
      alt: "Cars",
    },
  ];

  const coreValues = [
    {
      number: "01",
      title: "Integrity",
      description:
        "We conduct our business with honesty, fairness and respect while always striving to do what is right.",
      featured: false,
    },
    {
      number: "02",
      title: "Accountability",
      description:
        "We take responsibility for our decisions, actions, commitments, and business processes.",
      featured: false,
    },
    {
      number: "03",
      title: "Reliability",
      description:
        "We strive to be dependable in the way we serve customers, work with partners, and carry out our operations.",
      featured: true,
    },
    {
      number: "04",
      title: "Discipline",
      description:
        "We maintain professional standards, follow established processes, and operate with consistency and responsibility.",
      featured: false,
    },
    {
      number: "05",
      title: "Transparency",
      description:
        "We provide clear and accurate information while maintaining open and documented business processes.",
      featured: false,
    },
    {
      number: "06",
      title: "Responsibility",
      description:
        "We consider the interests of customers, partners, employees and communities while conducting business responsibly.",
      featured: false,
    },
  ];

  return (
    <>
      {/* ===================== VEHICLES & FLEET ===================== */}
      <section className="py-20 px-5 sm:px-8 bg-slate-100/50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-left sm:text-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#052DA7]/10 text-[#052DA7] dark:text-[#6B8CFF] text-sm font-semibold">
              Vehicles &amp; Fleet
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              Driving Transportation Forward
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              At EMMMAR MOTORS COMPANY LTD, our vehicles are at the heart of
              our transportation, logistics, cargo and commercial operations
              across Nigeria. Our fleet is strategically deployed to support
              passenger transportation, cargo movement, logistics services and
              commercial activities nationwide.
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
            {fleetItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] h-[480px]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 p-7 text-white">
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="mt-20 rounded-[32px] bg-[#052DA7] text-white p-8 sm:p-12 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70 font-semibold">
              Built Around Assets. Driven By Operations.
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Strengthening Transportation Across Nigeria
            </h3>

            <p className="mt-5 max-w-4xl mx-auto text-white/80 leading-relaxed">
              At EMMMAR MOTORS COMPANY LTD, our vehicle assets form an important
              foundation of our transportation and logistics operations. Through
              strategic vehicle acquisition, deployment and professional fleet
              management, we continue to strengthen our operational capacity and
              deliver dependable transportation solutions nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== OUR CORE VALUES ===================== */}
      <section className="py-24 px-5 sm:px-8 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#052DA7]/10 text-[#052DA7] dark:text-[#6B8CFF] text-sm font-semibold">
                  Our Core Values
                </span>

                <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  The Standards That Define EMMMAR
                </h2>

                <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our values guide every decision we make, every relationship
                  we build, and every operation we undertake. They provide the
                  foundation for sustainable growth, responsible business
                  practices, and operational excellence.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="w-12 h-1 rounded-full bg-[#052DA7]" />

                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Built on Trust • Driven by Excellence
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT VALUES */}
            <div className="lg:col-span-7">
              <div className="space-y-3">
                {coreValues.map((value, index) =>
                  value.featured ? (
                    /* Reliability (Featured) */
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl bg-[#052DA7] p-3.5 sm:p-4 text-white"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-[#052DA7]" />

                      <div className="relative flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white text-[#052DA7] flex items-center justify-center text-xs font-bold">
                          {value.number}
                        </div>

                        <div>
                          <h3 className="text-base font-semibold">
                            {value.title}
                          </h3>

                          <p className="mt-1 text-xs sm:text-sm text-white/90 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Standard Value Items */
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-slate-900/5 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-3.5 sm:p-4 transition-all duration-300 hover:border-[#052DA7]/40"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#052DA7]/[0.02] via-transparent to-[#052DA7]/[0.05] opacity-0 group-hover:opacity-100 transition duration-300" />

                      <div className="relative flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#052DA7] text-white flex items-center justify-center text-xs font-bold">
                          {value.number}
                        </div>

                        <div>
                          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                            {value.title}
                          </h3>

                          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}