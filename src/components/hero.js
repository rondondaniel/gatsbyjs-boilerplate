import * as React from 'react'
import { PrismicLink } from '@prismicio/react'

export const Hero = ({
  title,
  description,
  linkUrl,
  linkLabel,
  backgroundUrl,
}) => {
  return (    
    <section
      className="test"
      style={{
        backgroundImage: `url(${backgroundUrl})`, 
        backgroundRepeat:"no-repeat", 
        backgroundSize:"contain", 
        //height:600,width:600
      }}
    >
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <PrismicLink href={linkUrl} className="banner-button">
          {linkLabel}
        </PrismicLink>
      </div>
    </section>
    )
}

export default Hero
