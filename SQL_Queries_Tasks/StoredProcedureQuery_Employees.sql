create procedure spGetEmployeeByManager 
@manager varchar(20)
as
begin
	select count(*) from Employees where Reporting_Manager=@manager
end

exec spGetEmployeeByManager 'Naveen';

create proc spGetEmployeeByGender 
@Gender varchar(20)
as
begin
	select * from Employees where Gender=@Gender
end

exec spGetEmployeeByGender'Male'

create proc spGetEmployeeCountByGender 
@Gender varchar(20)
as
begin
	select count(*) as TotalEmployees from Employees where Gender=@Gender 
end

exec spGetEmployeeCountByGender 'Female' 

create proc spGetEmployeeCountByTeam
@team varchar(50)
as 
begin
	select Team,count(*) as TotalEmployeesInTeam from Employees where Team= @team group by Team
end

exec spGetEmployeeCountByTeam 'Passport Team2';

create proc spSearchEmployeeByNameOrIdOrDesignation
@searchkey varchar(20)
as
begin
	select * from Employees where Name=@searchkey  or Designation=@searchkey or EmpId=TRY_CAST(@searchkey as int)
end

exec spSearchEmployeeByNameOrIdOrDesignation 'SE1';