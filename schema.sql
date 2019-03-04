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
  text varchar(2550), 
  usefulCount int, 
  usefulToggle tinyint,
  usefulBackgroundColor varchar(15),
  usefulFontColor varchar(15),
  funnyCount int, 
  funnyToggle tinyint,
  funnyBackgroundColor varchar(15),
  funnyFontColor varchar(15),
  coolCount int,
  coolToggle tinyint,
  coolBackgroundColor varchar(15),
  coolFontColor varchar(15)
  );

describe reviews;

exit