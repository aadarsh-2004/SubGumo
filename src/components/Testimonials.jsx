import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Nakul Pandya",
      title: "Freelancer",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAUPUG0r--EDZzf-f9Afj_Jp7N96yIGsWPgCYIkrAS1rCJHIcdm_RCq_me44bJc0dvvY&usqp=CAU",
    },
    {
      name: "Talent Jain",
      title: "Equity Manager",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4E2VJ1RoM9KgIfnENewfJVuHfAROYvUqzg&s",
    },
  ];

  return (
    <div className="mt-16 md:mt-44 bg-gradient-to-r from-[#ffeed8] via-white to-[#ffeed8] flex flex-col items-center py-16">
      {/* Heading Section */}
      <div className="mb-12 text-center px-4">
        <h1 className="text-[16px] font-poppins font-medium text-gray-600">
          Testimonial
        </h1>
        <h2 className="text-[32px] md:text-[42px] lg:text-[52px] text-blue-950 font-Volkhov">
          What people say about Us.
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 md:gap-15 lg:gap-16 px-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative text-black bg-white rounded-xl shadow-lg text-start p-6 md:p-8 transform hover:-translate-y-3 transition-all duration-500 w-full max-w-[500px]"
          >
            {/* Avatar */}
            <img
              src={testimonial.imageUrl}
              alt={testimonial.name}
              className="absolute -top-10 left-6 md:left-8 transform w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white"
            />
            {/* Testimonial Content */}
            <div className="mt-8 md:mt-12 pl-2">
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm font-light">{testimonial.title}</p>
              <blockquote className="italic mt-4 text-gray-700">
                "{testimonial.quote}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
