// import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import web1 from './images/images/web1.png';
// import web2 from './images/images/web2.jpeg';
// import web3 from './images/images/web3.jpeg';
// import web4 from './images/images/web4.jpg';
// import web5 from './images/images/web5.jpg';
// import web6 from './images/images/web6.png';
// import web7 from './images/images/web7.png';

// const images = [web1, web2, web3, web4, web5, web6, web7];

// function Background() {
//   const [imageIndex, setImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setImageIndex((imageIndex + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [imageIndex]);

//   return (
//     <div
//       className="background"
//       style={{
//         backgroundImage: `url(${images[imageIndex]})`,
//       }}
//     >
//       <App />
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


