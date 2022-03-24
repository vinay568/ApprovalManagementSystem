Create table empTask (EmpId int ,EmpName nvarchar(20),Department nvarchar(20),HireDate date,Training int);

insert into empTask values(1234,'J.Jones','sales','18-Jun-92',24),
(2345,'S.Smith','production','12-Feb-98',40),
(3456,'A.Adams','Sales','18-Nov-98',60),
(4567,'B.Bates','Advertising','10-mar-85',16),
(5678,'D.Daves','Production','26-Jul-99',56),
(6789,'C.Cole','Shipping','18-May-91',32),
(7890,'E.Ellis','Sales','15-Dec-98',80),
(8901,'F.Files','Advertising','17-Oct-90',24),
(9012,'G.Gates','Advertising','15-Mar-99',48);

select * from empTask;

select distinct Department from empTask;

alter table empTask add location nvarchar(20);

update empTask set location = 'London' where EmpId>=1;

sp_rename 'empTask.EmpId', 'EmployeeId';

select * from empTask where Department in ('sales','shipping');

select * from empTask where year(HireDate)> 1991 and year(HireDate)<1998;

select * into new_empTask from empTask where 'A'='B';
select * from new_empTask;

select * from empTask where Training>40;

select * into new_empTask2 from empTask;
select * from new_empTask2;

delete from empTask where Training>60;

alter table empTask drop column HireDate;

alter table empTask alter column Department varchar(34);

insert into empTask(EmpName,Department,Training) values ('Z.Zack','HR',69);

