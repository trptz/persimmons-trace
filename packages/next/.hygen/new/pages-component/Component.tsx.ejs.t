---
to: <%= path %>/index.page.tsx
---
<%
if (methods) {
%>
import { <%= methods %> } from "next"
<% } %>
// FIXME: 適宜要 import path 修正
import { <%= templateName %> } from "../../components/templates/<%= templateName %>"
<% if (hasHooks) { -%>
import { use<%= templateName %>Page } from "./modules"
<% } -%>

const <%= templateName %>Page = () => {
<% if (hasHooks) { -%>
  const dependencies = use<%= templateName %>Page()
<% } -%>
  return <<%= templateName %> />
}

<% if (hasGetServerSideProps) { -%>
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}
<% } -%>

<% if (hasGetStaticProps) { -%>
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
<% } -%>

<% if (hasGetStaticPaths) { -%>
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}
<% } -%>

export default <%= templateName %>Page
