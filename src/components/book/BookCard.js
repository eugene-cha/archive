import React from 'react';

const BookCard = ({ title, author, image, description }) => {
  return (
    <div className="bg-white rounded-2x1 shadow-md overflow-hidden w-64">
      <div className="w-full aspect-square">
        <img src={image} alt={title} className="h-full object-cover" />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600 font-bold">{author}</p>
        <p className="text-gray-600 text-ellipsis mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
