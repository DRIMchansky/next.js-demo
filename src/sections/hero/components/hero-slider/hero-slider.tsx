import { CarouselContext, Slide, Slider } from 'pure-react-carousel'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { getUrlForImage } from '@/app/sanity/lib/image'
import { HeroContent } from '../hero-content'
import { Locks } from '@/app/store/locks'

import styles from './hero-slider.module.css'

type Props = {
  locks: Locks
  className?: string
}

export const HeroSlider = ({ locks, className }: Props) => {
  const carouselContext = useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(carouselContext?.state.currentSlide)

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext?.state.currentSlide)
    }
    carouselContext.subscribe(onChange)
    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  return (
    <Slider className={clsx(styles.slider, className)} classNameTrayWrap={styles.trayWrap} classNameTray={styles.tray}>
      {locks.map((lock, index) => (
        <Slide
          index={index}
          key={lock.title}
          innerClassName={styles.slideInner}
          classNameVisible={styles.slideVisible}
          tabIndex={-1}
        >
          <Image
            src={getUrlForImage(lock.poster).width(500).url()}
            priority
            alt={lock.title}
            width={500}
            height={500}
            className={styles.image}
            autoFocus={false}
          />

          <HeroContent isCurrent={currentSlide === index} title={lock.title} />
        </Slide>
      ))}
    </Slider>
  )
}