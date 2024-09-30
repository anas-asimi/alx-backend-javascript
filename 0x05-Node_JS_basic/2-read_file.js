const fs = require('fs');

function countStudents(path) {
    if (fs.existsSync(path)) {
        const csvData = fs.readFileSync(path, 'utf8');
        const rows = csvData.trim().split('\n');

        for (const row of rows) {
            console.log(row);
        }

    } else console.log('Cannot load the database');

}

module.exports = countStudents
