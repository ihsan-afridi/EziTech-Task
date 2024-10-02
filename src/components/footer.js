import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome for icons
import { MdLocationOn } from 'react-icons/md'; // Import the location icon from react-icons
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'; // Import React Icons for Facebook and Instagram

const Footer = () => {
  return (
    <div className='mt-5 bg-primary'>
      <div className='container mt-5'>
        <h1 className='text-white'> It's time to start investing in yourself.</h1>
      </div>
      <img src='https://ezitech.org/wp-content/uploads/2023/03/8-3-1441x555-copy-1438x554.webp' />
      <footer className="bg-primary text-center text-lg-start text-white">
        <div className="container p-4">
          <div className="row my-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About</h5>
              <p className="">
                Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.
              </p>
              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a className="text-white px-2" href="#!">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a className="text-white px-2" href="#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="text-white ps-2" href="#!">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Popular Courses</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>MERN Stack</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Digital Marketing</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Logo Designing</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Image Processing</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Machine Learnig</a>
                </li>
              
               
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Page</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Blogs</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Ezicoding</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Internship</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-white"><i className="fas fa-paw pe-3"></i>Our Services</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <p><MdLocationOn className="inline-block pe-2" size={24} /> Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
                </li>
                <li>
                  <p><i className="fas fa-phone pe-2"></i>+923455555396</p>
                </li>
                <li>
                  <p><i className="fas fa-envelope pe-2 mb-0"></i>info@ezitech.org</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <a className="text-white" href="https://mdbootstrap.com/">Copyright © 2024 Ezitech Institute | Design & Develop by Eziline Software House</a>
        </div>

        {/* New Section for Social Icons */}
        <div className="d-flex justify-content-end p-3" style={{ position: 'relative' }}>
          <a className="text-white px-2" href="#!">
            <FaFacebookSquare size={20} />
          </a>
          <a className="text-white px-2" href="#!">
            <FaInstagram size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
