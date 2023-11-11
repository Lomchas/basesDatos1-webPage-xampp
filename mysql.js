const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'lomchas',
    password:'1716',
    database:'pets',
})

connection.connect((err) => {
    if(err) throw err
    console.log("You're connected");
})

connection.query('SELECT * FROM alive', (err, rows) => {
    let alive_pets = [];
    if(err) throw err;
    console.log("Los las mascotas vivas son: ");
    rows.forEach(pets => {
        alive_pets.push(pets);
    });
    console.log(alive_pets);
})


connection.end();