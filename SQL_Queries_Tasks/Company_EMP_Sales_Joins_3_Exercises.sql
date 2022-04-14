
select * from orders;
select * from salesman;
select * from customers;

select * from company;
select * from item_mast;

select * from emp_department;
select * from emp_details;



select o.ord_no as orderNumber, o.purch_amt as PurchaseAmount, c.cust_name as CustomerName, c.city as cities from orders o join
customers c on o.customer_id = c.customer_ID where o.purch_amt between 500 and 2000;

select s.Name as SalesManName, c.cust_name as CustomerName from salesman s join orders o 
on s.salesman_ID = o.salesman_id join customers c on o.customer_id = c.customer_ID;

select s.Name as SalesManName, c.cust_name as CustomerName, s.commission as Commission from salesman s  join customers c on 
s.salesman_id = c.salesman_ID where s.commission > 0.12;


select * from salesman;
select * from customers;
select s.Name as SalesManName, c.cust_name as CustomerName, s.commission as Commission from salesman s join 
customers c on s.city = c.city  ;

select o.ord_no as OrderNumber, o.ord_date as OrderDate, o.purch_amt as OrderAmount, c.cust_name as CustomerName, s.NAME as SalesMan, s.commission 
from orders o join customers c on o.customer_id = c.customer_ID 
join salesman s on s.salesman_ID = o.salesman_id;

select item.pro_name as ItemName, item.pro_price as ItemPrice, com.com_name as Company from item_mast item join company com on item.pro_com = com.com_id;

select com.com_name as Company, avg(item.pro_price) as AvgPrice from item_mast item join company com on item.pro_com = com.com_id 
group by com.com_name having avg(item.pro_price) >=350;


select emp.emp_fname as FirstName, emp.emp_lname as LastName, dpt.DPT_Name as Department, dpt.DPT_ALLOTMENT as SanctionedAmount
from emp_details emp join emp_department dpt on emp.emp_DPT = dpt.DPT_code 


select s.NAME as Salesman , c.cust_name as CustomerName from salesman s join customers c on s.salesman_ID = c.salesman_id join orders o on o.salesman_id = c.salesman_id;

insert into salesman values(50010,'vinay','hyd',0.90);

select s.name from salesman s where s.salesman_ID not in (select distinct salesman_id from customers);