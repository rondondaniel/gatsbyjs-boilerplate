import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

export const VideoHighlights = ({ slice }) => {
  return (
  <section className="highlight content-section">
    <div className="highlight-left">
      <PrismicRichText field={slice.primary.eyebrow_headline.richText} />
      <PrismicRichText field={slice.primary.title.richText} />
      <PrismicRichText field={slice.primary.description.richText} />
    </div>
    <div className="highlight-right">
      {slice.items.map((videoItem, index) => (
        <div className="gallery-item" key={`gallery-item=${index}`}>
          <iframe
            src={videoItem.video_src.embed_url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            title={videoItem.video_title.text}
          />
        </div>
      ))}
    </div>
  </section>
  )
}

export const query = graphql`
  fragment HomePageDataBodyVideoHighlights on PrismicHomePageDataBodyVideoHighlights {
    primary {
      title {
          richText
      }
      description {
        richText
      }
      eyebrow_headline {
        richText
      }      
    }
    items {
      video_title {
        text
      }
      video_src {
        embed_url
      }
    }
  }
`