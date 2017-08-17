DROP DATABASE IF EXISTS `tindfur`;
CREATE DATABASE `tindfur`;

CREATE TABLE `pets` (
  `id` Int( 50 ) AUTO_INCREMENT NOT NULL,
  `animal_name` VARCHAR( 255) NOT NULL,
  `animal_type` VARCHAR( 255 ) NOT NULL,
  `gender` VARCHAR( 255 ) NOT NULL,
  `age` VARCHAR( 255 ) NOT NULL,
  `location` VARCHAR( 255 ) NOT NULL,
  `bio` VARCHAR( 255 ) NOT NULL,
  `photo` VARCHAR( 255 ) NOT NULL,

  PRIMARY KEY ( `id` ) );
