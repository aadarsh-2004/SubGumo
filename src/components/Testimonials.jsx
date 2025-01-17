import React from "react";
const Testimonial = () => {
  const testimonials = 
    {
      name1: "Nakul Pandya",
      title1: "Freelancer",
      quote1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      imageUrl1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAUPUG0r--EDZzf-f9Afj_Jp7N96yIGsWPgCYIkrAS1rCJHIcdm_RCq_me44bJc0dvvY&usqp=CAU", // Replace with actual image
    

    
      name: "Talent Jain",
      title: "Equity Manager",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci .",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4E2VJ1RoM9KgIfnENewfJVuHfAROYvUqzg&s", // Replace with actual image
    };
  

  return (
    <div className="mt-44 mb-24 w- bg-gradient-to-r from-[#ffeed8]  via-white to-[#ffeed8] flex justify-evenly  py-16">
      <div>
        <h1 className="text-[16px]  font-poppins font-medium text-gray-600">
          Testimonial
        </h1>
        <h2 className="text-left  text-[52px]   font-Volkhov mb-12">
          What people say
          <br /> about Us.
        </h2>
      </div>

      {/*Cards */}
      <div className="relative    w-fit max-w-screen h-fit text-black ">
        {/* TCard1 */}
        <div className="flex  p-1 overflow-x-scroll-hide flex-wrap   scrollbar-hide bg-transparent justify-start ">
          
            <div  className=" text-black bg-white ml-0 rounded-xl shadow-xl text-start m-8 p-8 w-[500px] h-[200px] transform  hover:-translate-y-3 transition-all duration-800  ">
              {/* Avatar */}
              <img
                src={testimonials.imageUrl}
                alt={testimonials.name}
                className="absolute -top-9 left-4 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
              />
              {/* Testimonial Content */}
              <div className="mt-1 p-1">
                <h3 className="text-lg font-semibold">{testimonials.name}</h3>
                <p className="text-sm font-light">{testimonials.title}</p>
                <blockquote className=" italic mt-4 text-black hover:text-black">
                  "{testimonials.quote}"
                </blockquote>
              </div>
            </div>
          
        </div>
        {/* T card2 */}
        <div className="flex ml-24  overflow-x-scroll-hide flex-wrap   scrollbar-hide bg-transparent justify-start ">
          
            <div  className=" text-black bg-white ml-9 rounded-xl shadow-xl text-start  mt-0 m-8 p-8 w-[500px] h-[200px] transform  hover:-translate-y-3 transition-all duration-800  ">
              {/* Avatar */}
              <img
                src={testimonials.imageUrl}
                alt={testimonials.name}
                className="absolute -top-5 left-[480px] transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
              />
              {/* Testimonial Content */}
              <div className="mt-1  p-1 m-0">
                <h3 className="text-lg font-semibold">{testimonials.name}</h3>
                <p className="text-sm font-light">{testimonials.title}</p>
                <blockquote className=" italic mt-4 text-black hover:text-black">
                  "{testimonials.quote}"
                </blockquote>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
