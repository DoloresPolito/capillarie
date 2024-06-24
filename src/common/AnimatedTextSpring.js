import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

const AnimatedTextSpring = ({children, delay = 0}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  })

  const [animatedStyle, setAnimatedStyle] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(30px)',
    config: { duration: 350, delay },
    delay,
  }))

  if (inView) {
    setAnimatedStyle({
      opacity: 1,
      transform: 'translateY(0px)',
      config: { duration: 700, delay },
      delay,
    })
  }

  return (
    <animated.div ref={ref} style={animatedStyle}>
      {children}
    </animated.div>
  )
}

export default AnimatedTextSpring;
