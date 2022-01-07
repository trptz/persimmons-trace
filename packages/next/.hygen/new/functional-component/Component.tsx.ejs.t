---
to: <%= path %>/index.tsx
---
<% if (isOnlyStyle) { -%>
import styled from "styled-components"
<% if (hasProps) { -%>
import { <%= componentName %>Props } from './types'

export const <%= componentName %> = styled.div<<%= componentName %>Props>``
<% } else { -%>
export const <%= componentName %> = styled.div``
<% } -%>

<% } else { -%>
import { VFC } from "react"
<% if (hasHooks) { -%>
import { use<%= componentName %> } from './modules'
<% } -%>
<% if (hasProps) { -%>
import { <%= componentName %>Props } from './types'
<% } -%>

export const <%= componentName %>: <%- typeAnnotation %> = <%= props %> => {
<% if (hasHooks) { -%>
  const dependencies = use<%= componentName %><%= props %>
<% } -%>
  return <div>Test</div>
}
<% } -%>
