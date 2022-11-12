import React from 'react';
import './info.css';
import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import { useEffect } from 'react';

function Info() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  return (
    <div className="info-container">
      <h2>Discovering Siami!</h2>
      <motion.div
        className="info-flex-container"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}>
        <div>
          <img src="./slides.svg" alt="" />
          <h4>All the slides you can imagine</h4>
          <p>
            In Siami we have a great variety of slides. Adapted to the tastes of all our visitors.
            From slides that will cause a rush of adrenaline to your body for the most daring to
            slides for children. Don&apos;t miss this experience, there is no doubt that everyone
            has fun in our parks!
          </p>
        </div>
        <div>
          <img src="./guard.svg" alt="" />
          <h4>Guards always present</h4>
          <p>
            At Siami we care about the safety of our visitors. We have contracted a private security
            service that is in charge of making our park a totally safe space. Lifeguards in all the
            pools, cameras watching all the areas at all times and police officers constantly
            present.
          </p>
        </div>
        <div>
          <img src="./meal.svg" alt="" />
          <h4>All the variety in meals</h4>
          <p>
            In our park you will have dining rooms and kiosks where you will find everything you can
            imagine. You don&apos;t need to bring anything from home. In Siami you will be able to
            eat delicious, varied and in quantity.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Info;
