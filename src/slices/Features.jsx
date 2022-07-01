import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { PrismicLink, PrismicRichText } from "@prismicio/react"

export const Features = ({ slice }) => {
  const title = slice.primary.features_title.richText
  const description = slice.primary.features_description.richText
  
  return (
    <section className="highlight content-section">
      <div className="highlight-left">
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
      </div>
      <div className="highlight-right">
        {slice.items.map((featureItem, index) => (
          <div className="gallery-item" key={`gallery-item=${index}`}>
            <div className="highlight-left">
              <PrismicRichText field={featureItem.feature_title.richText} />
              <PrismicRichText field={featureItem.feature_description.richText} />
              <PrismicLink href={featureItem.button_feature_link.url}>
                {featureItem.button_feature_label.text}
              </PrismicLink>
            </div>
            <div>
              <GatsbyImage
                alt={featureItem.feature_image.alt}
                image={featureItem.feature_image.gatsbyImageData}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomePageDataBodyFeatures on PrismicHomePageDataBodyFeatures {
    primary {
      features_title {
        richText
      }
      features_description {
        richText
      }
    }
    items {
      image_position
      feature_title {
        richText
      }
      feature_description {
        richText
      }
      feature_image {
        url
        alt
        gatsbyImageData
      }
      button_feature_label {
        text
      }
      button_feature_link {
        url
      }
    }
  }`