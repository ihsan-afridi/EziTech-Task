import React, { useState, useEffect } from 'react';
import '../App.css';


const Content = () => {
  const words = ['Programming', 'Web Designing', 'Social Skills', 'Marketing'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass(''); // Reset the fade class to trigger reflow
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      
      // Add the fade-in class again after a slight delay
      setTimeout(() => {
        setFadeClass('fade-in');
      }, 50); // Adjust the timing as needed
    }, 2000); // Change word every 2 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [words.length]);


  return (
    <div className="text-white">
   <div className="text-[50px] font-bold">
      Learn the fundamentals with our experts
      <br />
      in <span className={fadeClass} style={{color:'#e8d217'}}>{words[currentWordIndex]}</span>
    </div>
      <div className="text-2xl">
      <span style={{ filter: 'blur(1px)' }}>Utilize effective learning to reach your potential ❤️</span>

        <br />
        <input
          type="text"
          placeholder="Search Courses"
          className="border mb-5 border-gray-300 mt-6  rounded-lg p-2 w-96 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
     <br/>
     <span className="mr-5 font-bold">EZIBLOGS</span>
     <span className="mr-5 font-bold">EZIPOS</span>
     <span className="font-bold">EZICODING</span>

<div>

</div>
      </div>
    </div>
  );
};

export default Content;
