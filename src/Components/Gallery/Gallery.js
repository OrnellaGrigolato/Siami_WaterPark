import { React, useEffect, useState } from 'react';
import data from '../../photos.json';
import './gallery.css';
import { motion } from 'framer-motion';

function Gallery() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <div>
      <h3 className="galleryTitle">See our photos!</h3>
      <div className="flex-container">
        {data.results.map((elem) => {
          return (
            <motion.img
              className="gallery-img"
              whileHover={{
                scale: 1.1
              }}
              key={elem.id}
              alt={elem.alt_description}
              src={`${elem.urls.small}`}></motion.img>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
