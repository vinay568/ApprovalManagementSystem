select * from Customer where FirstName='Eduardo' ;
select * from genre ;
select concat(c.FirstName,c.LastName) as Name, sum(inv.total) as Amount from Customer c join Invoice inv 
on c.CustomerId = inv.CustomerId  group by concat(c.FirstName,c.LastName) having sum(inv.total) <38 order by Amount asc;

select c.FirstName as customer_name , inv.InvoiceDate as orderDate from Customer c join Invoice inv
on c.CustomerId = inv.CustomerId where year(inv.InvoiceDate) = 2012;

select e.FirstName, e.LastName, inv.InvoiceId, c.CustomerId, inv.InvoiceDate, inv.BillingAddress, inv.BillingCountry, inv.BillingPostalCode, inv.total
from Employee e join Customer c on e.EmployeeId = c.SupportRepId
join Invoice inv on inv.CustomerId=c.CustomerId where e.FirstName='jane' group by e.FirstName ,  e.LastName, inv.InvoiceId, c.CustomerId, inv.InvoiceDate, 
inv.BillingAddress, inv.BillingCountry, inv.BillingPostalCode, inv.total having year(inv.InvoiceDate) = 2009 and month(inv.InvoiceDate) <5 
and inv.BillingCountry not in('India','Canada')

select invl.InvoiceLineId, inv.InvoiceId, t.TrackId, t.UnitPrice,invl.Quantity, t.Name, ar.Name as Artist 
from InvoiceLine invl join Invoice inv on invl.InvoiceId = inv.InvoiceId 
join Track t on invl.TrackId=t.TrackId join Album al on al.AlbumId=t.AlbumId join Artist ar on ar.ArtistId=al.AlbumId where t.TrackId<5

select concat(e.FirstName,e.LastName) as SalesAgent, inv.InvoiceId, c.CustomerId, inv.InvoiceDate,inv.BillingAddress,inv.BillingCity,inv.BillingState,
inv.BillingCountry,inv.BillingPostalCode,inv.Total
from Employee e join Customer c on e.EmployeeId=c.SupportRepId 
join Invoice inv on inv.InvoiceId = c.CustomerId 
group by concat(e.FirstName,e.LastName) , inv.InvoiceId, c.CustomerId, inv.InvoiceDate,inv.BillingAddress,inv.BillingCity,inv.BillingState,
inv.BillingCountry,inv.BillingPostalCode,inv.Total 
having year(inv.InvoiceDate)= 2009 and inv.InvoiceId <9

select e.EmployeeId, sum(invl.UnitPrice*invl.Quantity) as TotalSaleAmount from Employee e 
join Customer c on  e.EmployeeId=c.SupportRepId
join Invoice inv on c.CustomerId=inv.InvoiceId
join InvoiceLine invl on inv.InvoiceId = invl.InvoiceId
join Track t on t.TrackId = invl.TrackId
group by e.EmployeeId;

select concat(c.FirstName,c.LastName), inv.InvoiceId,inv.InvoiceDate,inv.BillingCountry 
from Customer c join Invoice inv on c.CustomerId = inv.CustomerId where inv.BillingCountry='Brazil' and inv.InvoiceId<130;

select t.Name as TrackName ,t.Composer, t.Milliseconds,t.Bytes, al.Title as AlbumName, mt.Name as MediaTypeName, g.Name
from Track t join Album al on t.AlbumId=al.AlbumId
join MediaType mt on mt.MediaTypeId=t.MediaTypeId
join Genre g on g.GenreId=t.GenreId where g.Name='Rock' ;