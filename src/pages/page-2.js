import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const systemsQuery = graphql`
  {
    allPrismicSystem {
      edges {
        node {
          data {
            description {
              html
            }
            title {
              html
            }
          }
        }
      }
    }
  }
`

const System = ({system}) => (
  <div style={{background: '#d3d3d3', borderRadius: '4px', padding: '16px', display: 'flex', flexDirection: 'column'}}>
    <div dangerouslySetInnerHTML={{__html: system.title.html}}/>
    <div dangerouslySetInnerHTML={{__html: system.description.html}}/>
  </div>
);

const SecondPage = ({data}) => {
  const systems = data.allPrismicSystem.edges.map(e => e.node.data);
  return (
    <Layout>
      <SEO title="Page two" />
      {systems.map(s => <System system={s} />)}
    </Layout>
  )
}

export default SecondPage
