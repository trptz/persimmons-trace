---
to: "<%= hasHooks && !isOnlyStyle ? `${path}/modules/index.test.ts` : null %>"
---
import { use<%= componentName %> } from "./"

describe("use<%= componentName %>", () => {
  it("dummy", () => {
    expect(1).toEqual(1)
  })
})
