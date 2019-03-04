var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'student',
  database : 'yelp'
});
 
connection.connect();

var faker = require('faker');
/*
A seed script is a script that generates dummy data, possibly using random values or a look up table of acceptable values. 
The script will create the SQL queries required to insert the data into the database and may also execute the query.
*/

var reviews = [];
for (var i = 1; i <= 10; i++){
  var randomReviewsCount = Math.floor(Math.random() * 10) + 1; 
  var randomRestaurant = faker.Company.companyName();
  for (var j = 1; j <= randomReviewsCount; j++){
    function randomDate(start, end) {
      var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [month, day, year].join('/');
    }

    const data = {
      id: i,
      restaurant: randomRestaurant,
      name: faker.Name.firstName() + ' ' + faker.Name.lastName()[0] + '.',
      image: faker.Image.avatar(),
      location: faker.Address.city() +', ' + faker.Address.usState(),
      friendCount: faker.random.number(100),
      reviewsCount: faker.random.number(100),
      photoCount: faker.random.number(100),
      starsCount: faker.random.number(5),
      date: randomDate(new Date(2012, 0, 1), new Date()),
      text: faker.Lorem.paragraphs() + "\n\n" + faker.Lorem.paragraphs() ,
      usefulCount: faker.random.number(20),
      usefulToggle: 0,
      usefulBackgroundColor: 'white',
      usefulFontColor: 'black',
      funnyCount: faker.random.number(20),
      funnyToggle: 0,
      funnyBackgroundColor:'white',
      funnyFontColor: 'black',
      coolCount: faker.random.number(20),
      coolToggle: 0,
      coolBackgroundColor: 'white',
      coolFontColor: 'black'
    };
 
    reviews.push(data)
    
  }  
}
console.log(reviews.length)
for (var i = 0; i < reviews.length; i++){
  connection.query(`insert into reviews SET ?`, reviews[i])
}

connection.end()

