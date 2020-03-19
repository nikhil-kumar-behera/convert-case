module.exports = {
  regex: {
    spaceRegEx: /\s/g,
    titleRegEx: /\w\S*/g,
    camelCase: /(?:^\w|[A-Z]|\b\w)/g,
    sentenceCase: /(^\s*\w|[\.\!\?]\s*\w)/g
  },
  char: {
    hyphen: "-",
    underscore: "_",
    dot: ".",
    slash: "/",
    blank: ""
  }
};
