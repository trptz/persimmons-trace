module.exports = {
  prompt: (arg) => {
    const { inquirer } = arg
    const questions = [
      {
        type: "select",
        name: "category",
        message: "atomic design のどのカテゴリに属しますか？",
        choices: ["atoms", "molecules", "organisms", "templates"],
      },
      {
        type: "input",
        name: "componentName",
        message: "component 名を指定してください",
        required: true,
      },
      {
        type: "confirm",
        name: "isOnlyStyle",
        message: "スタイルのみの component ですか？",
      },
      {
        type: "confirm",
        name: "hasProps",
        message: "props は必要ですか？",
      },
      {
        type: "confirm",
        name: "hasHooks",
        message: "component 専用の custom hooks は必要ですか？",
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { category, componentName: componentNameBase, hasProps } = answers
      const [initial, ...latest] = [...componentNameBase]
      const componentName = `${initial.toUpperCase()}${latest.join("")}`
      const storyPath = ["components", category, componentName]
        .filter(Boolean)
        .join("/")
      const path = ["src", storyPath].join("/")
      const typeAnnotation = hasProps ? `VFC<${componentName}Props>` : "VFC"
      const props = hasProps ? "(props)" : "()"
      return {
        ...answers,
        componentName,
        path,
        storyPath,
        typeAnnotation,
        props,
      }
    })
  },
}
