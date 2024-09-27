import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj74DMh5zS9EdQ2Lcm96WFl7V_Ris1pzLKjQ&s',
    'https://media.istockphoto.com/id/1226029166/photo/fruts-vegetables-at-market-india.jpg?s=612x612&w=0&k=20&c=2zOAPF32PTDonIvCUA1PyBhXQ1X0UcKDmQKtknz_sAA=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdG0JBl2CMewoKeTqXkymCOVfNIsTAZ9EuA&s',
  ];

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img src={image} alt={`Colorful ${index}`} key={index} />
      ))}
    </div>
  );
};

export default ImageGallery;
