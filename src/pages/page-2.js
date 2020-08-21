import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const systemsQuery = graphql`
  {
    allContentfulSystem {
      edges {
        node {
          type
          slug
          description
          presentationVideo {
            description
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`

const System = ({system}) => (
  <div style={{background: '#d3d3d3', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column'}}>
    <h1>{system.type}</h1>
    <p>{system.description}</p>
    <video controls style={{outline: 'none', background: '#191414'}}>
      <source src={system.presentationVideo.file.url} type="video/mp4" />
    </video>
  </div>
);

const SecondPage = ({data}) => {
  const systems = data.allContentfulSystem.edges.map(e => e.node);
  return (
    <Layout>
      <SEO title="Page two" />
      {systems.map(s => <System system={s} />)}
    </Layout>
  )
}

export default SecondPage
