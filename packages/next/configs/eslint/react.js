const { OFF, ERROR } = require("./const")

module.exports = {
  rules: {
    "react/jsx-props-no-spreading": OFF,
    "react/prop-types": OFF,
    "react/jsx-fragments": [ERROR, "element"],
    "react/jsx-filename-extension": [
      ERROR,
      { extensions: [".ts", ".tsx"] },
    ],
  },
}
