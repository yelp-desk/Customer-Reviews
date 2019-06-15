var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'student',
  database : 'yelp'
});
 
connection.connect();

// var connection = mysql.createConnection({
//   host     : 'aa10hn2oqnez18.czfipm1dwzy0.us-west-1.rds.amazonaws.com',
//   user     : 'alvintan626',
//   password : 'studentstudent',
//   port     : 3306
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });


const getdb = (restaurantId, callback)=>{
  connection.query(`select * from reviews where id=${restaurantId}`, function (error, results) {
    if (error){
      callback(error)
    } else {
      callback(null, results)
    }
  });
}

const putdb = (restaurantId, data, name, argument, callback)=>{
  connection.query(`UPDATE reviews SET ${argument}Count = ?, ${argument}Toggle = ?, ${argument}BackgroundColor = ?, ${argument}FontColor = ? WHERE id = ${restaurantId} && name="${name}"`, data, function (error, results) {
    if (error){
      callback(error)
    } else {
      callback(null, results)
    }
  });
}

module.exports = {
  getdb, putdb
}

