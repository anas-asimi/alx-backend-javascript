import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
      } else {
        const rows = data
          .trim()
          .split('\n')
          .slice(1)
          .map((e) => e.split(','));
        const fields = new Set(rows.map((e) => e[3]));
        const myObj = {};
        for (const field of fields) {
          const students = rows.filter((e) => e[3] === field);
          myObj[field] = students;
        } res(myObj);
      }
    });
  });
}
