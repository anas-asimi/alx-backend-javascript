const fs = require('fs');

function countStudents(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                rej(new Error('Cannot load the database'));
            }
            else {
                const rows = data
                    .trim()
                    .split('\n')
                    .slice(1)
                    .map(e => e.split(','))
                const fields = new Set(rows.map(e => e[3]))
                console.log(`Number of students: ${rows.length}`);
                for (const field of fields) {
                    students = rows.filter(e => e[3] === field)
                    console.log(`Number of students in ${field}: ${students.length}. List: ${students.map(e => e[0]).join(', ')}`);
                } res()
            }
        });
    })
}

module.exports = countStudents
