import readDatabase from '../utils.js'

export default class StudentsController {
    static getAllStudents(request, response) {
        const path = process.argv[2]
        readDatabase(path).then(fields => {
            response.write('This is the list of our students\n');
            for (const field in fields) {
                if (Object.prototype.hasOwnProperty.call(fields, field)) {
                    const students = fields[field];
                    response.write(`Number of students in ${field}: ${students.length}. List: ${students.map(e => e[0]).join(', ')}\n`);
                }
            }
            response.end()
        }).catch(error => {
            response.status(500).send(error.message)
        })
    }

    static getAllStudentsByMajor(request, response) {
        const major = request.params.major;
        if (major == 'CS' || major == 'SWE') {
            const path = process.argv[2]
            readDatabase(path).then(fields => {
                const students = fields[major];
                response.write(`List: ${students.map(e => e[0]).join(', ')}\n`);
                response.end()
            }).catch(error => {
                response.status(500).send(error.message)
            })
        }
        else {
            response.status(500).send('Major parameter must be CS or SWE')
        }

    }
}
