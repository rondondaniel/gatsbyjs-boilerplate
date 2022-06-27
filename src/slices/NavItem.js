import * as React from "react"
import { graphql } from "gatsby"
import { PrismicLink } from "@prismicio/react"

export const NavItem = ({ slice }) => {
  
  return (
    <nav>
      <ul>
        {topNav.map((navItem, index) => {
          return (
            <li key={`link-${index}`}>
              <PrismicLink field={navItem.link.url}>
                {navItem.label.text}
              </PrismicLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export const query = graphql`
  fragment NavigationsDataBodyNavItem on PrismicNavigationsDataBodyNavItem {
    primary {
      label {
          text
        }
        link {
          url
          link_type
          slug
        }
    }
  }

`

