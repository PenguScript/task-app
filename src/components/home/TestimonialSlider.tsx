import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    quote:
      "This app has transformed the way I manage my projects. I can't imagine working without it!",
    name: "Alice Johnson",
    position: "Project Manager",
    initial: "A",
    color: "bg-blue-500",
  },
  {
    id: 2,
    quote:
      "A fantastic tool that keeps my team organized and on track. Highly recommended!",
    name: "Bob Smith",
    position: "Software Engineer",
    initial: "B",
    color: "bg-green-500",
  },
  {
    id: 3,
    quote:
      "The goal-setting feature is a game changer! It helps me stay focused and productive.",
    name: "Charlie Brown",
    position: "Freelancer",
    initial: "C",
    color: "bg-yellow-500",
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {testimonials.map(({ id, quote, name, position, initial, color }) => (
          <div key={id} className="bg-gray-800 p-4 h-full rounded-lg shadow-sm">
            <p className="text-gray-400">{quote}</p>
            <div className="mt-2 flex items-center">
              <div
                className={`flex-shrink-0 w-10 h-10 ${color} rounded-full flex items-center justify-center text-white text-xl`}
              >
                {initial}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
                <p className="text-sm text-gray-500">{position}</p>
              </div>
            </div>
          </div>
        ))}{" "}
      </Slider>
    </div>
  );
}
