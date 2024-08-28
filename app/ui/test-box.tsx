import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AboutMe: React.FC = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  // Animation for the first section
  const firstAnimation = useSpring({
    opacity: showFirst ? 1 : 0,
    transform: showFirst ? 'translateX(0px)' : 'translateX(-50%)',
    config: { tension: 170, friction: 26 },
  });

  // Animation for the second section
  const secondAnimation = useSpring({
    opacity: showSecond ? 1 : 0,
    transform: showSecond ? 'translateX(0px)' : 'translateX(50px)',
    config: { tension: 170, friction: 26 },
  });

  // Trigger animations sequentially
  useEffect(() => {
    setShowFirst(true);
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 500); // Delay for the second animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <animated.div style={firstAnimation} className="about-section">
        <h2>About Me - Part 1</h2>
        <p>This is the first part of my about me section.</p>
      </animated.div>
      <animated.div style={secondAnimation} className="about-section">
        <h2>About Me - Part 2</h2>
        <p>This is the second part of my about me section.</p>
      </animated.div>
    </div>
  );
};

export default AboutMe;
