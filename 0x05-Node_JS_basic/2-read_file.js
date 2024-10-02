const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    const csvData = fs.readFileSync(path, 'utf8');
    const rows = csvData
      .trim()
      .split('\n')
      .slice(1)
      .map((e) => e.split(','));

    const fields = new Set(rows.map((e) => e[3]));
    console.log(`Number of students: ${rows.length}`);
    for (const field of fields) {
      const students = rows.filter((e) => e[3] === field);
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.map((e) => e[0]).join(', ')}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
