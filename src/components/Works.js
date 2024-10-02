import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import ai from '../assets/ai.png';
import blockchain from '../assets/blockchain.jpg';
import cyber from '../assets/cyber.jpg';
import amazone from '../assets/amazone.jpg';
import development from '../assets/development.png';
import design from '../assets/design.jpg';
import gaming from '../assets/gaming.jpg';
import arch from '../assets/arch.png';
import ios from '../assets/ios.jpg';
import marketing from '../assets/marketing.jpg';
import threed from '../assets/threed.jpg';
import animation from '../assets/animation.jpg';

const Works = () => {
  return (
    <div className='p-8 bg-white'>
      {/* Title */}
      <div className='text-center mb-12'>
        <span className='font-bold text-4xl text-gray-800'>How it Works?</span>
      </div>

      {/* First Row: 3 Images */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
        {/* Image 1 */}
        <div className='relative transition-transform transform hover:scale-105'>
          <img src={image1} alt='Step 1' className='w-full h-[200px] rounded-lg shadow-lg object-cover' />
        </div>

        {/* Image 2 */}
        <div className='relative transition-transform transform hover:scale-105'>
          <img src={image2} alt='Step 2' className='w-full h-[200px] rounded-lg shadow-lg object-cover' />
        </div>

        {/* Image 3 */}
        <div className='relative transition-transform transform hover:scale-105'>
          <img src={image3} alt='Step 3' className='w-full h-[200px] rounded-lg shadow-lg object-cover' />
        </div>
      </div>

      {/* Second Row: 6 Images with white background, rounded corners, and spacing */}
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12'>
        {/* Image 4 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={ai} alt='AI' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>AI</div>
        </div>

        {/* Image 5 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={blockchain} alt='Blockchain' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>Blockchain</div>
        </div>

        {/* Image 6 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={cyber} alt='Cyber Security' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>Cyber Security</div>
        </div>

        {/* Image 7 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={amazone} alt='Amazon' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>Amazon</div>
        </div>

        {/* Image 8 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={development} alt='Development' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>Development</div>
        </div>

        {/* Image 9 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={design} alt='Design' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>Design</div>
        </div>
      </div>

      {/* Third Row: 6 Images with same size and spacing */}
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12'>
        {/* Image 10 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={gaming} alt='Gaming' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>Gaming</div>
        </div>

        {/* Image 11 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={arch} alt='Architecture' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>Architecture</div>
        </div>

        {/* Image 12 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={ios} alt='iOS Development' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>iOS Development</div>
        </div>

        {/* Image 13 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={marketing} alt='Marketing' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>Marketing</div>
        </div>

        {/* Image 14 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={threed} alt='3D Modeling' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>3D Modeling</div>
        </div>

        {/* Image 15 */}
        <div className='bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <img src={animation} alt='Animation' className='w-full h-[140px] object-cover rounded-lg' />
          <div className='mt-2 text-center text-gray-800 font-semibold'>Animation</div>
        </div>
      </div>
    </div>
  );
};

export default Works;
