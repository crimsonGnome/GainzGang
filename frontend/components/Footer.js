import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

import Foot from './styles/FooterStyles';
import Logo from './styles/Logo';

const slides = [
  {
    item1: 'Light',
    item2: 'Truth',
    item3: 'Peace'
  },
  {
    item1: 'Lux',
    item2: 'Veritas',
    item3: 'Pax'
  }
];

const Motto = () => {
  const [isToggled, setToggle] = useState(0);
  const transitions = useTransition(slides[isToggled], isToggled, {
    from: { postion: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });
  useEffect(
    () =>
      void setInterval(() => {
        setToggle(isToggled => (isToggled + 1) % 2);
      }, 6000),
    []
  );
  return transitions.map(({ item, key, props }) => (
    <animated.div key={key} style={props}>
      <div className="school-moto">
        <span className="first">{item.item1}</span>
        <span className="second">{item.item2}</span>
        <span className="third">{item.item3}</span>
      </div>
    </animated.div>
  ));
};

const Footer = () => {
  return (
    <Foot>
      <div className="min-height-motto">
        <Motto></Motto>
      </div>
      <div className="block-logo">
        <Logo>
          <img src="/static/banner3.png" alt="Pomona Catholic Crest" />
        </Logo>
      </div>
      <h3 className="school-name">Saint Lucy's Priory High School</h3>
      <div>
        <div>655 W. Sierra Madre Avenue | Glendora, CA 91741 </div>
        <div>(626) 335-3322</div>
      </div>
    </Foot>
  );
};

export default Footer;
