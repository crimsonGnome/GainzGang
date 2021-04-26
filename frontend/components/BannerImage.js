import React, { useState, useEffect, useRef } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { BannerLabel, BannerPadding } from './styles/HomeStyles';
// import './styles.css'

const slides = [
  {
    id: 0,
    url:
      'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i',
    word: 'Clothing stuff',
  },
  {
    id: 1,
    url:
      'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80',
    word: 'Clothing Sale',
  },
  {
    id: 2,
    url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80',
    word: 'stuffy stuff',
  },
  {
    id: 3,
    url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80',
    word: 'With Honor and Moral Courage',
  },
];

const BannerImage = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    const time = setInterval(() => set((state) => (state + 1) % 4), 6000);
    return () => clearInterval(time);
  }, []);

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="bg"
      style={{
        ...props,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(50vh)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        willChange: 'opacity',
        backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
      }}
    >
      <BannerPadding>
        <BannerLabel>{item.word}</BannerLabel>
      </BannerPadding>
    </animated.div>
  ));
};

export default BannerImage;
