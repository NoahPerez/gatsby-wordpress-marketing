import * as React from "react"
import { graphql } from "gatsby"


import Seo from "../components/Seo";

const Page = ({ data }) => {
  const page = data.wpPage
  return (
    <div>
    <Seo
      title={page.title}
      description={page.content}
      image="/logo.png"
      pathname={page.uri}
      // Boolean indicating whether this is an article:
      // article
    />
    <article>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </article>
    </div>
  )
}

export default Page

export const query = graphql`
  query ($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
      uri
    }
  }
`
