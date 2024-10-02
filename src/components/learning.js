import React from 'react';
import phoneImg from '../assets/img/phone-copy.webp';
const Masthead = () => {
  return (
    <header className="masthead mb-5">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          {/* Swap order: Device on the left, text on the right */}
          <div className="col-lg-6 order-lg-2">
            {/* Masthead text and app badges */}
            <div className=" mb-lg-0 text-center text-lg-start">
              <h1 className="mb-3">Learnig <span style={{color: "#538eed"}}>anytime</span>from anywhere.</h1>
              <p className="lead  text-muted mb-5">
              Incease the mobility level with Eziline Technologies LMS App. take your courses in your pockect and access them when ever you want without any limits. make your learning more engaging and productive using modren LMS app.
              </p>
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                  <img
                    className="app-badge"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play Badge"
                  />
                </a>
                <a href="#!">
  <img
    className="app-badge"
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="App Store Badge"
  />
</a>

              </div>
            </div>
          </div>

          <div className="col-lg-6 order-lg-1">
            {/* Masthead device mockup feature */}
            <div className="masthead-device-mockup">
              <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                    <stop className="gradient-start-color" offset="0%" />
                    <stop className="gradient-end-color" offset="100%" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(120.42 -49.88) rotate(45)"
                />
                <rect
                  x="-32.54"
                  y="78.39"
                  width="305.92"
                  height="84.05"
                  rx="42.03"
                  transform="translate(-49.88 120.42) rotate(-45)"
                />
              </svg>
              <svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>

              {/* Adding position relative and z-index */}
              <div className="device-wrapper" style={{ position: 'relative', zIndex: 10 }}>
                <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black" style={{ zIndex: 10 }}>
                  <div className="screen">
                    {/* Static image replacing the video */}
                    <img
                      src={phoneImg}
                      alt="Phone"
                      style={{ maxWidth: '400px', height: '600px', marginLeft:'-100px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </header>
  );
};

export default Masthead;
