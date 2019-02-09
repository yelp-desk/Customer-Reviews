drop database yelp;

create database yelp;

use yelp;

create table reviews (
  id int, 
  restaurant varchar(200),
  name varchar(30), 
  image varchar(250),
  location varchar(100), 
  friendCount int, 
  reviewsCount int, 
  photoCount int, 
  starsCount int,
  date varchar(10),
  text varchar(1250), 
  usefulCount int, 
  usefulToggle boolean,
  usefulColor varchar(15),
  funnyCount int, 
  funnyToggle boolean,
  funnyColor varchar(15),
  coolCount int,
  coolToggle boolean,
  coolColor varchar(15)
  );

describe reviews;

exit