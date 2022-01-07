---
to: "<%= hasHooks ? `${path}/modules/index.ts` : null %>"
---
export const use<%= templateName %>Page = () => {
  return {}
}
