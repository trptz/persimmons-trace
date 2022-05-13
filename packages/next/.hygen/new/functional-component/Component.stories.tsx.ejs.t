---
to: <%= path %>/index.stories.tsx
---
import { <%= componentName %> } from "."
<% if (hasProps) { -%>
import { <%= componentName %>Props } from "./types"
<% } -%>

export default {
  title: "<%= storyPath %>",
}

<% if (hasProps) { -%>
export const Default = (props: <%= componentName %>Props) => <<%= componentName %> {...props} />
<% } else { -%>
export const Default = () => <<%= componentName %> />
<% } -%>
