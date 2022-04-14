select * from orders;
select * from customers;
select * from salesman;

select * from company;
select * from item_mast;

select * from emp_details;
select * from emp_department;

---SubQueries-Exercise

---Query 1 Write a query to display all orders from the orders table issued by the salesman ‘Paul Adman’ 
select *  from orders o 
where o.salesman_id in (select salesman_ID from salesman where Name='Paul Adam');

---Query 2 Write a query to display all orders for the salesman who belongs to city London
select *  from orders o 
where o.salesman_id in (select salesman_ID from salesman where city='London');

---Query 3 Write a query to find all the orders issues against the salesman who may works for customer whose id is  3007 
select * from orders where salesman_id in (select salesman_id from orders where customer_id = 3007);

---Query 4 Write a query to display all the orders which values are greater than the average order value for 10th October 2012
select * from orders where purch_amt > (select avg(purch_amt) from orders where ord_date = '2012-10-10');

---Query 5 Write a query to find all orders attributed to a salesman in New York.
select *  from orders o 
where o.salesman_id in (select salesman_ID from salesman where city='New York');

---Query 6 Write a query to display the commission of all the salesmen servicing customers in Paris.
select * from salesman where salesman_ID in (select salesman_id from customers where city='Paris');

---Query 7 Write a query to display all the customers whose id is 2001 bellow the salesman ID of Mc Lyon. 
select * from customers where (customer_ID ) in (select salesman_ID-2001 from salesman where Name='Mc Lyon');

---Query 8 Write a query to count the customers with grades above New York's average. 
select count(*)as NumberOfCustomers from customers where grade > (select avg(grade) from customers where city='New York') ;

---Query 9 Write a query to display all customers with orders on October 5, 2012 
select * from customers where customer_ID in (select customer_id from orders where ord_date = '2012-10-5');

---Query 10 Write a query to find the name and numbers of all salesmen who had more than one customer. 
select * from salesman a where 1 < (select count(*) from customers where salesman_id = a.salesman_ID);

---Query 11 Write a queries to find all orders with order amounts which are on or above-average amounts for their customers. 
select * from orders o where purch_amt >= (select avg(purch_amt) from orders b where b.customer_id = o.customer_id )

---Query 12 Write a query to find the sums of the amounts from the orders table, grouped by date,
---eliminating all those dates where the sum was not at least 1000.00 above the maximum order amount for that date
select * from orders group by ord_date 

---Query 13 Write a query to extract the data from the customer table if and only if one or more of the customers in the customer table are located in London. 
select * from customers where exists (select customer_ID from customers where city ='London'  );

---Query 14 Write a query to find the salesmen who have multiple customers. 
select * from salesman s where salesman_ID in (select c.salesman_id from customers c group by c.salesman_id having count(c.customer_ID)>1);

---Query 15 Write a query that extract the rows of all salesmen who have customers with more than one orders. 
select * from salesman where salesman_ID in (select salesman_id from orders group by salesman_id having count(customer_id)>1 );

---Query 16 Write a query to display all orders with an amount smaller than the maximum amount for a customers in London. 
select * from orders o where o.purch_amt < 
(select max(purch_amt) from orders a, customers c where a.customer_id = c.customer_ID and c.city='London'  );

---Query 17 Write a query to display only those customers whose grade are, in fact, higher than every customer in New York. 
select * from customers where  grade > ALL (select grade from customers where city ='New York');

---Query 18 Write a SQL query to display the name of each company, price for their most expensive product along with their Name. 
select c.com_name, p.pro_price, p.pro_name from company c,item_mast p where c.com_id=p.pro_com and p.pro_price =
(select max(t.pro_price) from item_mast  t where c.com_id = t.pro_com  ) 

---Query 19 Write a query in SQL to find the first name and last name of employees working for departments which sanction amount is second lowest
select distinct emp_fname,emp_lname from emp_details ed, emp_department edt where emp_DPT in
(select DPT_code from emp_department where DPT_ALLOTMENT =
(select min(DPT_ALLOTMENT) from emp_department where DPT_ALLOTMENT <
(select min(DPT_ALLOTMENT) from emp_department)) );

---Query 20 Write a query in SQL to find the names of departments where more than two employees are working 
select * from emp_department edt where DPT_code in (select emp_DPT from emp_details ed 
where ed.emp_DPT = edt.DPT_code group by emp_DPT having count(ed.emp_IDNO) >2 );

---Query 21 Write a SQL statement to know which salesman are working for which customer
select s.salesman_ID,s.Name,c.customer_ID,c.cust_name from salesman s,customers c where exists 
(select c.customer_ID from customers c where c.salesman_id = s.salesman_ID);

select * from orders;
select * from customers;
select * from salesman;
---Query 22 Write a SQL statement to find the list of customers who appointed a salesman for their jobs 
---who does not live in the same city where their customer lives, and gets a commission is above 12%. 
select *  from customers c where c.salesman_id in (select s.salesman_ID from salesman s where s.city!=c.city and  s.commission > 0.12)

---Query 23 Write a SQL statement to make a list in ascending order for the customer who holds a grade less than 300 and works either through a salesman or by own. 
select * from customers c where grade < 300 and salesman_id in (select s.salesman_ID from salesman s where s.salesman_ID = c.salesman_id)
select * from customers c left join salesman s on s.salesman_ID = c.salesman_id where grade <300;

---Query 24 Write a SQL statement to make a list in ascending order for the salesmen who works either for one or more customer or not yet join under any of the customers.
select a.cust_name,a.city,a.grade, 
b.name as "Salesman", b.city 
from customers a 
right outer join salesman b 
on b.salesman_id=a.salesman_id 
order by b.salesman_id;

---Query 25 Write a SQL statement to make a list for the salesmen who works either for one or more customer or not yet join under
---any of the customers who placed either one or more orders or no order to their supplier
select a.cust_name,a.city,a.grade, 
b.name as "Salesman", 
c.ord_no, c.ord_date, c.purch_amt 
from customers a 
right outer join salesman b 
on b.salesman_id=a.salesman_id 
right outer join orders c 
on c.customer_id=a.customer_id;

---Query 26 Write a SQL statement to make a report with customer name, city, order no, order date, purchase amount for those customers from the existing 
---list who placed one or more orders or which order(s) have been placed by the customer who is not on the list 
select a.cust_name,a.city, b.ord_no,
b.ord_date,b.purch_amt as "Order Amount" 
from customers a 
full outer join orders b 
on a.customer_id=b.customer_id 
where a.grade is not null;

---Query 27 Write a SQL statement to make a report with customer name, city, order no. order date, purchase amount for only those customers on the list 
---who must have a grade and placed one or more orders or which order(s) have been placed by the customer who is neither in the list nor have a grade. 
select a.cust_name,a.city, b.ord_no,
b.ord_date,b.purch_amt as "Order Amount" 
from customers a 
full outer join orders b 
on a.customer_id=b.customer_id 
where a.grade is not null;


---Query 28 Write a SQL query to display the item name, price, and company name of all the products. 
select p.pro_name , p.pro_price, c.com_name from item_mast p, company c where c.com_id in (select c.com_id from company where p.pro_com = c.com_id);
