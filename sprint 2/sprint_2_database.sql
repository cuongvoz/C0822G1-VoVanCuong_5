create database cuong_computez;
use cuong_computez;
create table `user` (
id int auto_increment primary key,
name varchar(255),
username varchar(255),
password varchar(255),
address varchar(255),
date_of_birth varchar(255),
email varchar(255),
phone_number varchar(255),
avatar varchar(255),
gender boolean
);

create table role (
id int auto_increment primary key,
name varchar(255));
create table category (
id int auto_increment primary key,
name varchar(255));

create table user_roles (
user_id int,
roles_id int,
primary key(user_id,roles_id),
foreign key(user_id) references user(id),
foreign key(roles_id) references role(id));

create table bill(
id int auto_increment primary key,
buy_date date,
user_id int,
quantity int,
foreign key(user_id) references user(id)
);



create table product(
id int auto_increment primary key,
name varchar(255),
price double,
image varchar(255),
category_id int,
foreign key(category_id) references category(id)
);

create table warehouse(
id int auto_increment primary key,
product_id int,
foreign key(product_id) references product(id)
);

create table buy_history(
id int auto_increment primary key,
bill_id int,
product_id int,
quantity int,
foreign key(bill_id) references bill(id),
foreign key(product_id) references product(id)
);