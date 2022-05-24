with RecursiveCTE as
(
select EmployeeID,concat(FirstName,' ',LastName) as EmployeeName,
1 as Tier from Employee Where ReportsTo is null
--select * from RecursiveCTE

union all
select emp.EmployeeID,concat(FirstName,' ',LastName) as EmployeeName,Tier+1 from Employee
emp join RecursiveCTE on emp.ReportsTo=RecursiveCTE.EmployeeID)

select * from RecursiveCTE

with RecursiveCTE2 as
(
select EmployeeID,concat(FirstName,' ',LastName) as EmployeeName,
1 as Tier,0 as Level from Employee Where ReportsTo is null
--select * from RecursiveCTE2

union all
select emp.EmployeeID,concat(FirstName,' ',LastName) as EmployeeName,Tier+1, Level+1 from Employee
emp join RecursiveCTE2 on emp.ReportsTo=RecursiveCTE2.EmployeeID)

select * from RecursiveCTE2