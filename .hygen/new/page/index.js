module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "page_name",
        message: "What is the page name? (format example: service_worker)",
      },
      {
        type: "confirm",
        name: "need_style_file",
        message: "Do you need style file",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { page_name, need_style_file } = answers;
      const component_name = page_name
        .replace(/^\w/g, (v) => v.toUpperCase())
        .replace(/-\w/g, (value) => value.toUpperCase().slice(1));
      const absPath = `pages/${page_name}`;
      return { ...answers, absPath, component_name, need_style_file };
    });
  },
};
