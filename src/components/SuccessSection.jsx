// src/components/SuccessSection.jsx
import React from 'react';
import CountUp from 'react-countup';

const SuccessSection = () => {
  return (
    <div className="success-section max-w-7xl m-auto pt-20 px-2">
      <h2 className="text-6xl font-bold mb-6 text-center text-[#456389]">Our Success</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="success-item border py-5 rounded-xl bg-[#d0e2ec]">
          <h3 className="text-xl text-[#1d1b28] font-bold">Users</h3>
          <CountUp end={500} duration={5} className="text-3xl font-bold text-blue-600" />
          <span className='text-4xl font-bold text-blue-600'>+</span>
        </div>
        <div className="success-item border py-5 rounded-xl bg-[#d0e2ec]">
          <h3 className="text-xl text-[#1d1b28] font-bold">Lessons</h3>
          <CountUp end={12} duration={5} className="text-3xl font-bold text-green-600" />
          <span className='text-4xl font-bold text-green-600'>+</span>
        </div>
        <div className="success-item border py-5 rounded-xl bg-[#d0e2ec]">
          <h3 className="text-xl text-[#1d1b28] font-bold">Vocabularies</h3>
          <CountUp end={200} duration={5} className="text-3xl font-bold text-red-600" />
          <span className='text-4xl font-bold text-red-600'>+</span>
        </div>
        <div className="success-item border py-5 rounded-xl bg-[#d0e2ec]">
          <h3 className="text-xl text-[#1d1b28] font-bold">Tutorials</h3>
          <CountUp end={20} duration={5} className="text-3xl font-bold text-yellow-600" />
          <span className='text-4xl font-bold text-yellow-600'>+</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
