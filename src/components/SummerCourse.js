import React, { useState } from 'react';

// Sample course data based on the provided image
const coursesData = [
  {
    category: 'Web Development Course with Industrial Projects',
    totalCourses: 4,
    discountPrice: 'PKR10,000',
    originalPrice: 'PKR33,100',
    courses: [
      { title: 'From Novice to Expert, The Complete JavaScript Course 2024!', price: 'PKR7,600' },
      { title: 'The Complete Guide to React (incl Hooks, React Router, Redux)', price: 'PKR8,000' },
      { title: 'Sell Fiverr Gigs Like The Top 1% in Freelancing in 2024', price: 'PKR4,500' },
      { title: 'The Complete Bootcamp 2024: Node.js, Express, MongoDB, and More', price: 'PKR13,000' },
      { title: 'Mastering HTML & CSS for Responsive Websites', price: 'PKR5,500' }, // New Course
      { title: 'Advanced JavaScript: ES6, Async Programming', price: 'PKR6,200' }, // New Course
    ],
  },
  {
    category: 'Digital Marketing Mastery Learn for the best',
    totalCourses: 6,
    discountPrice: 'PKR8,000',
    originalPrice: 'PKR32,500',
    courses: [
      { title: 'YouTube ads and Google ads', price: 'PKR5,000' },
      { title: 'Search Engine Optimization (SEO)', price: 'PKR6,000' },
      { title: 'Advance Digital Marketing', price: 'PKR6,500' },
      { title: 'Content Marketing Strategy', price: 'PKR4,200' }, // New Course
      { title: 'Social Media Marketing (Facebook, Instagram)', price: 'PKR7,000' }, // New Course
      { title: 'Affiliate Marketing for Beginners', price: 'PKR3,800' },
    ],
  },
];

const SummerCourse = () => {
  return (
    <div className='p-8 bg-gray-100'>
      {/* Title */}
      <div className='text-center mb-8'>
        <span className='font-bold text-4xl text-blue-700'>Limited-Time Summer Course Bundles!</span>
        <br />
        <span className='text-gray-600'>Note: All these bundles have recorded lectures</span>
      </div>

      {/* Course Bundles */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {coursesData.map((bundle, index) => (
          <CourseCard key={index} bundle={bundle} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({ bundle }) => {
  // State to manage hover effect
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className='relative p-6 bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bundle Header with Background */}
      <div className='absolute inset-x-0 top-0 bg-blue-700 text-white p-8 mb-12 rounded-t-lg text-center'>
        <h2 className='text-xl font-semibold'>{bundle.category}</h2>
        <span className='block text-sm'>{bundle.totalCourses} Courses</span>
      </div>

      {/* Course List (Initially show 3, show all on hover) */}
      <div className='mt-20 mb-4'>
        {bundle.courses.slice(0, hovered ? bundle.courses.length : 3).map((course, idx) => (
          <div key={idx} className='flex justify-between items-center p-2 border-b'>
            <span className='text-gray-800'>{course.title}</span>
            <span className='font-medium text-blue-600'>{course.price}</span>
          </div>
        ))}
      </div>

      {/* Pricing Details */}
      <div className='flex justify-between items-center font-semibold text-lg mt-4'>
        <span className='text-blue-700'>Total Price:</span>
        <div className='flex items-baseline'>
          <span className='text-red-600 line-through mr-2'>{bundle.originalPrice}</span>
          <span className='text-green-600'>{bundle.discountPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default SummerCourse;
