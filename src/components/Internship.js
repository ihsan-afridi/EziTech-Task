import React from 'react';

const Internship = () => {
  // Array to hold card data
  const cards = [
    {
      title: 'HTML/CSS Javascript',
      institute: 'Ezitech Institute',
      employment: 'Hybrid',
      location: 'Rawalpindi',
      jobType: ['Full Time', 'Part Time'],
      image: 'https://static.vecteezy.com/system/resources/thumbnails/006/537/224/small/abstract-modern-tech-of-programming-code-screen-developer-photo.jpg', // Same image for all cards
    },
    {
      title: 'Graphic Designing',
      institute: 'Ezitech Institute',
      employment: 'Hybrid',
      location: 'Rawalpindi',
      jobType: ['Full Time', 'Part Time'],
      image: 'https://static.vecteezy.com/system/resources/thumbnails/006/537/224/small/abstract-modern-tech-of-programming-code-screen-developer-photo.jpg',
    },
    {
      title: 'Digital Marketing',
      institute: 'Ezitech Institute',
      employment: 'Hybrid',
      location: 'Rawalpindi',
      jobType: ['Full Time', 'Part Time'],
      image: 'https://static.vecteezy.com/system/resources/thumbnails/006/537/224/small/abstract-modern-tech-of-programming-code-screen-developer-photo.jpg',
    },
    {
      title: 'Flutter Development',
      institute: 'Ezitech Institute',
      employment: 'Hybrid',
      location: 'Rawalpindi',
      jobType: ['Full Time', 'Part Time'],
      image: 'https://static.vecteezy.com/system/resources/thumbnails/006/537/224/small/abstract-modern-tech-of-programming-code-screen-developer-photo.jpg',
    },
    {
      title: 'Machine Learning',
      institute: 'Ezitech Institute',
      employment: 'Hybrid',
      location: 'Rawalpindi',
      jobType: ['Full Time', 'Part Time'],
      image: 'https://static.vecteezy.com/system/resources/thumbnails/006/537/224/small/abstract-modern-tech-of-programming-code-screen-developer-photo.jpg',
    },
    {
      title: 'MERN Development',
      institute: 'Ezitech Institute',
      employment: 'Hybrid',
      location: 'Rawalpindi',
      jobType: ['Full Time', 'Part Time'],
      image: 'https://static.vecteezy.com/system/resources/thumbnails/006/537/224/small/abstract-modern-tech-of-programming-code-screen-developer-photo.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            {/* Card Image with Title Overlay */}
            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }}>
              <div className="absolute bottom-0 bg-gray-900 bg-opacity-50 w-full py-2 text-white text-center">
                <h2 className="font-bold text-xl">{card.title}</h2>
              <p className="text-white text-sm">{card.institute}</p>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Institute Name */}

              {/* Employment, Location, and Job Type */}
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Employment: </span>{card.employment}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Location: </span>{card.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Job Type: </span>
                  {card.jobType.map((type, idx) => (
                    <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                      {type}
                    </span>
                  ))}
                </p>
              </div>

              {/* Read More Button */}
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
