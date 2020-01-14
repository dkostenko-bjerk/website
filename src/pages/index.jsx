import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeBanner from '../components/HomeBanner/home-banner';
import { StaticQuery } from 'gatsby';
import styled from 'styled-components'
import '../components/Button/button.css';


const Text = styled.p`
margin: 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        query Home {
          prismicHome {
            id
            data {
              linktext
              link {
                link_type
                url
                target
              }
              introductory {
                html
              }
              title {
                text
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <HomeBanner />
          <h1>{data.prismicHome.data.title.text}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.prismicHome.data.introductory.html,
            }}
          />
          <div 
            style={{
              border: `#4ECCA3 solid`,
              textAlign: `center`,
              borderRadius: `5px`,
              maxWidth: `14rem` 
            }}
          >
            <a
              className='button'
              href={data.prismicHome.data.link.url}
            ><Text>
              {data.prismicHome.data.linktext}
            </Text></a>
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
