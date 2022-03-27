import React from 'react'
import Navbar from '../navbar'
import {HeroContainer, HeroContent, HeroItems,HeroH1, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
        <Navbar/>
        <HeroContent>
            <HeroItems>
                <HeroH1>jk Pizza</HeroH1>
                <HeroP>Ready in 60 seconds</HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}
export default Hero