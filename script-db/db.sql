create database if not exists empresa;

use empresa;

create table Employee(
	id int(11) not null auto_increment,
    fullname varchar (50) ,
    functions varchar (100),
    primary key(id)
);


drop table Employee;
constraint Fk_setboss_boss FOREIGN KEY (boss) REFERENCES Employee(setboss);
    constraint Fk_setboss_employee FOREIGN KEY (employee) REFERENCES Employee(setboss)
;


insert into Employee(id,fullname,functions) values
 (last_insert_id(),'Ethan Buitrago','ayudante'),
 (last_insert_id(),'Juan Cantor','ayudante2');

Describe Employee;

select * from Employee;