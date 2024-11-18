import { FaUserCheck } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: 'Radoan Ahmed',
    feedback: 'This app has significantly improved my vocabulary!',
  },
  {
    id: 2,
    name: 'Jarin Zara',
    feedback: 'The lessons are fun and interactive. Highly recommend!',
  },
  {
    id: 3,
    name: 'Akiz Mia',
    feedback: 'A great tool for learning a new language. Love it!',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section max-w-7xl m-auto bg-white py-8 text-center pt-28">
      <h2 className="text-6xl font-bold text-[#456389] mb-6">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item p-4 border rounded-lg flex flex-col items-center bg-[#d0e2ec]">
            <FaUserCheck className="text-4xl" />
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
