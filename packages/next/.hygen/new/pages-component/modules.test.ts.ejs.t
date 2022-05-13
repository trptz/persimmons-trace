---
to: "<%= hasHooks ? `${path}/modules/index.test.ts` : null %>"
---
<% if (hasHooks) { -%>
import { use<%= templateName %>Page } from "."
<% } -%>

describe("use<%= templateName %>Page", () => {
  it("dummy", () => {
    expect(1).toEqual(1)
  })
})
