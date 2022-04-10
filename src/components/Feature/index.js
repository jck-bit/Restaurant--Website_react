import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the day</h1>
      <p>Truffle Pizza tapped with gold dust</p>
      <FeatureButton>Order now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature;
