const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith(".jsx") || file.endsWith(".js")) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk("./src");
files.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace(/"\/Img\//g, '"./Img/');
  content = content.replace(/'\/Img\//g, "'./Img/");
  content = content.replace(/"\/assets\/images\//g, '"./assets/images/');
  content = content.replace(/'\/assets\/images\//g, "'./assets/images/");
  content = content.replace(/"\/CV\.pdf"/g, '"./CV.pdf"');
  content = content.replace(
    /"\/Andrea_Feliziani_CV\.pdf"/g,
    '"./Andrea_Feliziani_CV.pdf"',
  );
  fs.writeFileSync(file, content);
});
console.log("Paths updated");
