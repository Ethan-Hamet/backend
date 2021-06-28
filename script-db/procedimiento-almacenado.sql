USE `empresa`;
DROP procedure IF EXISTS `employeeAddOrEdit`;

DELIMITER $$
USE `empresa`$$
create procedure employeeAddOrEdit (

	in _id int,
    in _fullname varchar(50),
    in _functions varchar(100)
)
begin
	if _id = 0 then
		insert into Employee(fullname,functions)
        values(_fullname, _functions);
        set _id =last_insert_id();  
	else
		update Employee
        set
			fullname = _fullname,
            functions = _functions
            where id = _id;
	end if;
    select _id as id ;
end$$

DELIMITER ;
