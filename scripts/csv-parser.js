const csv = require("csv-parser");
const fs = require("fs");
const slug = require("slug");
const massive = require("massive");
const dotenv = require("dotenv");

// const{CONNECTION_STRING}=process.env

//CSV data gets read into results array
const results = [];



// enter string of source file as paramater for outer function
fs.createReadStream("./dishes.csv")
  .pipe(csv())
  .on("data", data => {
      console.log(data)
      results.push(data)
  })
  .on("error", err => console.error("error parsing csv: ", err))
  .on("end", () => {
    console.log(results);
    // massive(CONNECTION_STRING)
//     .then((dbInstance) => {
//        // insertResults(dbInstance, results)
//     })
  });

// function insertResults(conn, results) {
//     console.log('acquired connection: ', conn)
//     for (var row in results) {
//         console.log(`inserting row ${row}`)
//       
//        
//         conn.create_restaurant(row.restaurant_name, row.address,                   row.city)
//     }
// }
