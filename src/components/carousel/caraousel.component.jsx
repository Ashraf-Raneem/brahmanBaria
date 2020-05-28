import React, { useState } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import './carousel.styles.css'
import templeBB from '../../picture/templeBB.jpg'
import riverBB from '../../picture/riverBB_2.jpg'
import trainBB from '../../picture/trainBB.jpg'

const items = [
  {
    src: trainBB,
    altText: 'Slide 1',
    caption: 'Slide 1',
    size: '720 x 1280'
  },
  {
    src: riverBB,
    altText: 'Slide 2',
    caption: 'Slide 2',
    size: '720 x 1280'
  }
];

const CarouselBg = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <img className ='carouselImage' src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className='carouselMain'>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}>
      {slides}
    </Carousel>
    </div>
  );
}

export default CarouselBg;