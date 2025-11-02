import React from 'react';

const travelImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1759222977064-7a75dc2b83b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", title: "Tropical Beach" },
  { id: 2, src: "https://source.unsplash.com/800x600/?mountains", title: "Mountain Peaks" },
  { id: 3, src: "https://source.unsplash.com/800x600/?forest", title: "Deep Forest" },
  { id: 4, src: "https://source.unsplash.com/800x600/?river", title: "Calm River" },
  { id: 5, src: "https://source.unsplash.com/800x600/?desert", title: "Golden Desert" },
  { id: 6, src: "https://source.unsplash.com/800x600/?city,night", title: "City Lights" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-5 md:px-16">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-3">
        Travel <span className="text-green-600">Gallery</span>
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore breathtaking travel destinations around the world —
        mountains, beaches, forests, deserts and more.
      </p>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {travelImages.map((img) => (
          <div
            key={img.id}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 "></div>

            {/* Text */}
            <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg opacity-0">
              {img.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
