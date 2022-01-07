module.exports = {
  prompt: (arg) => {
    const { inquirer } = arg
    const questions = [
      {
        type: "input",
        name: "dir",
        message:
          "component の格納ディレクトリを pages 以下から指定してください",
        required: true,
      },
      {
        type: "input",
        name: "templateName",
        message: "template 名を指定してください",
        required: true,
      },
      {
        type: "confirm",
        name: "hasGetStaticProps",
        message: "getStaticProps を使用しますか？",
      },
      {
        type: "confirm",
        name: "hasGetStaticPaths",
        message: "getStaticPaths を使用しますか？",
      },
      {
        type: "confirm",
        name: "hasGetServerSideProps",
        message: "getServerSideProps を使用しますか？",
      },
      {
        type: "confirm",
        name: "hasHooks",
        message: "component 専用の custom hooks は必要ですか？",
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const {
        dir,
        templateName: templateNameBase,
        hasGetServerSideProps,
        hasGetStaticProps,
        hasGetStaticPaths,
      } = answers
      const [initial, ...latest] = [...templateNameBase]
      const templateName = `${initial.toUpperCase()}${latest.join("")}`
      const path = `src/pages/${dir}`
      const methods = [
        [hasGetServerSideProps, "GetServerSideProps"],
        [hasGetStaticProps, "GetStaticProps"],
        [hasGetStaticPaths, "GetStaticPaths"],
      ]
        .reduce((currentMethods, [hasFlag, typeName]) => {
          if (hasFlag) currentMethods.push(typeName)
          return currentMethods
        }, [])
        .join(", ")
      return { ...answers, path, templateName, methods }
    })
  },
}
