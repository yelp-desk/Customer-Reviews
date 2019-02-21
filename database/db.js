var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'student',
  database : 'yelp'
});
 
connection.connect();

const getdb = (restaurantId, callback)=>{
  connection.query(`select * from reviews where id=${restaurantId}`, function (error, results, fields) {
    if (error){
      callback(error)
    } else {
      callback(null, results)
    }
  });
}

const postdb = (data, callback)=>{
  connection.query(insert, function (error, results, fields) {
    if (error){
      callback(error)
    } else {
      callback(null, results)
    }
  });
}

const putdb = (restaurantId, data, name, callback)=>{
  connection.query(`UPDATE reviews SET usefulCount = ?, usefulToggle = ?, usefulColor = ? WHERE id = ${restaurantId} && name="${name}"`, data, function (error, results, fields) {
    if (error){
      callback(error)
    } else {
      callback(null, results)
    }
  });
}

module.exports = {
  getdb, postdb, putdb
}