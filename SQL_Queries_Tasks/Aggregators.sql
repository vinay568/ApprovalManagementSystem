select max(salary) as maxSalary,min(salary) as minSalary,
avg(salary) from employees

select department_id as totalSalary ,sum(salary) as tota 
from employees group by (department_id)

select department_id,count(employee_id) as TotalEmployees 
from employees group by (department_id)

select sum(salary) from employees Group by (manager_id)

first_name Any (select first_name from employees)

SELECT
e.first_name,
e.last_name,
e.department_id,
COUNT (d.employee_id) AS number_of_employees
FROM employees e
JOIN employees d
ON d.manager_id = e.employee_id
GROUP BY e.first_name, e.last_name, e.department_id;

select avg(salary) from  employees group by (department_id) 

select max(salary),department_id from employees group by (department_id)