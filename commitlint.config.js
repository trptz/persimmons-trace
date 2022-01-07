const { dirs } = require("./commitlint.config/index")

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [
      2,
      "always",
      ["chore", "feat", "fix", "docs", "style", "refactor", "test", "revert"],
    ],
    "scope-enum": [2, "always", dirs],
    "scope-empty": [2, "never"],
    "body-leading-blank": [2, "always"],
  },
}
