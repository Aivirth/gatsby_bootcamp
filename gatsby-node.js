const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    // console.log(JSON.stringify(node, undefined, 4));

    //> create posts slugs programmatically
    const slug = path.basename(node.fileAbsolutePath, ".md");

    createNodeField({
      node: node,
      name: "slug",
      value: slug,
    });
  }
};
