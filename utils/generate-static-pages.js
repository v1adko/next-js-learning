require("./enable-imports-babel");

const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const { getInitialProps } = require("../pages/index").default;

const writeFile = promisify(fs.writeFile);

async function generatePages() {
  const { shows } = await getInitialProps();
  const pages = {};

  shows.forEach(({ show }) => {
    pages[`/p/${show.id}`] = { page: "/post", query: { id: show.id } };
  });

  const filePath = path.resolve(__dirname, "..", "static-pages.json");
  await writeFile(filePath, JSON.stringify(pages), { encoding: "utf-8" });
}

generatePages().catch(err => console.error(err));
