import * as React from "react"
import { graphql } from "gatsby"
import { PrismicLink, PrismicRichText } from "@prismicio/react"

export const CallToAction = ({ slice }) => {
  const title = slice.primary.title.richText
  const description = slice.primary.paragraph.richText
  const backgroundUrl = slice.primary.icon_image.url
  const button_label = slice.primary.button_label
  const button_link =slice.primary.button_link.url

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
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
        <PrismicLink href={button_link} className="banner-button">
          {button_label}
        </PrismicLink>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyCallToAction on PrismicPageDataBodyCallToAction {
    primary {
      button_label
      button_link {
        url
      }
      icon_image {
        url
      }
      title {
        richText
      }
      paragraph {
        richText
      }
    }
  }

  fragment HomePageDataBodyCallToAction on PrismicHomePageDataBodyCallToAction {
    primary {
      button_label
      button_link {
        url
      }
      icon_image {
        url
      }
      title {
        richText
      }
      paragraph {
        richText
      }
    }
  }
`

export default CallToAction
