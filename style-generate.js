const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

sass.render(
  {
    file: path.join(__dirname, './style/index.scss'),
  },
  (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    fs.writeFile(path.join(__dirname, './style/index.css'), result.css, (err) => {
      if (err) {
        console.log('err', err);
      }
    });
  },
);
