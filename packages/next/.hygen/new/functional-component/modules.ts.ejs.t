---
to: "<%= hasHooks && !isOnlyStyle ? `${path}/modules/index.ts` : null %>"
---
<% if (hasProps) { -%>
import type { <%= componentName %>Props } from "../types"

export const use<%= componentName %> = (props: <%= componentName %>Props) => {
  return {}
}
<% } else { -%>
export const use<%= componentName %> = () => {
  return {}
}
<% } -%>
