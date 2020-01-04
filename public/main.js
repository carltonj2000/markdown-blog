const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
const pagesPath = path.join(__dirname, "../src/pages/content");

const postlist = [];

const parseMetadata = (l, i) => {
  const o = {};
  if (i.length > 1) {
    const lines = l.slice(i[0] + 1, i[1]);
    lines.forEach(line => {
      const kv = line.split(":");
      o[kv[0].trim()] = kv[1].trim();
    });
  }
  return o;
};

const parseContent = (l, i) => {
  let content;
  if (i.length === 0) content = l.join("\n");
  else if (i.length > 1) {
    const lines = l.slice(i[1] + 1, l.length);
    content = lines.join("\n");
  }
  return content;
};

const getPosts = () => {
  const postlist = [];
  try {
    const files = fs.readdirSync(dirPath);

    files.forEach((file, i) => {
      const contents = fs.readFileSync(`${dirPath}/${file}`, "utf8");
      const lines = contents.split("\n");
      const metadataIndices = lines.reduce(
        (a, d, i) => (/^---/.test(d) ? [...a, i] : a),
        []
      );
      const metadata = parseMetadata(lines, metadataIndices);
      const content = parseContent(lines, metadataIndices);
      const date = new Date(metadata.date);
      const timestamp = date.getTime() / 1000;
      const post = {
        id: timestamp,
        title: metadata.title || "No title provided",
        author: metadata.author || "No author provided",
        date: metadata.date || "No date provided",
        content: content || "No content provided"
      };
      postlist.push(post);
    });
  } catch (error) {
    console.log("Failed! Generating blog posts with:", error);
  }
  const sorted = postlist.sort((a, b) => (a.id < b.id ? 1 : -1));
  fs.writeFileSync("src/posts.json", JSON.stringify(sorted, null, 2));
};

getPosts();

const getPages = () => {
  const pagelist = [];
  try {
    const files = fs.readdirSync(pagesPath);

    files.forEach((file, i) => {
      const content = fs.readFileSync(`${pagesPath}/${file}`, "utf8");
      const page = {
        file,
        content: content || "No content provided"
      };
      pagelist.push(page);
    });
  } catch (error) {
    console.log("Failed! Generating blog posts with:", error);
  }
  fs.writeFileSync("src/pages.json", JSON.stringify(pagelist, null, 2));
};
getPages();
