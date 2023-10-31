'use client'

import { CarouselProvider } from 'pure-react-carousel'
import React from 'react'

import { HeroSliderNav } from './components/hero-slider-nav'
import { HeroSlider } from './components/hero-slider'
import { $heroLocks } from '@/app/store/hero-locks'
import { useStore } from '@nanostores/react'

import styles from './hero.module.css'

export const Hero = () => {
  const heroLocks = useStore($heroLocks)

  return (
    <section className={styles.hero}>
      <CarouselProvider
        className={styles.carousel}
        naturalSlideWidth={100}
        naturalSlideHeight={15}
        totalSlides={heroLocks.length}
        isIntrinsicHeight={true}
        dragEnabled={false}
        touchEnabled={false}
        infinite={false}
      >
        <HeroSlider locks={heroLocks} />
        <HeroSliderNav className={styles.sliderNav} />
      </CarouselProvider>
    </section>
  )
}
