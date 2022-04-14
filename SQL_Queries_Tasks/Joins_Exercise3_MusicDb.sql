
---Joins_Exercise3

---Query 1
select concat(c.FirstName,c.LastName) as CustomerName, inv.InvoiceId, inv.InvoiceDate, inv.BillingCountry from Invoice inv join Customer c 
on inv.CustomerId = c.CustomerId where c.Country= 'Brazil';

---Query 2
select concat(e.Firstname,e.LastName) as SalesAgent,inv.InvoiceId from Employee e join Customer c 
on e.EmployeeId = c.SupportRepId join Invoice inv on c.CustomerId=inv.CustomerId order by inv.InvoiceId asc;

---Query 3
select inv.Total as InoviceTotal, concat(c.FirstName,c.LastName) as CustomerName, c.Country, Concat(e.FirstName,e.LastName) as SalesAgent from Customer c 
join Invoice inv on c.CustomerId = inv.CustomerId join Employee e on c.SupportRepId = e.EmployeeId;

---Query 4
select invl.InvoiceLineId , t.Name as TrackName, ar.Name as Artistname from InvoiceLine invl join Track t on invl.TrackId = t.TrackId
join Album al on t.AlbumId = al.AlbumId join Artist ar on al.AlbumId = ar.ArtistId order by invl.InvoiceId asc;

---Query 5
select count(t.TrackId) as NumberOfTracks , pl.Name as PlayListName from Track t join PlayListTrack plt on plt.TrackId = t.TrackId
join PlayList pl on plt.PlaylistId = pl.PlaylistId group by pl.Name order by count(t.trackId) asc;

---Query 6
select t.Name as TrackName , al.Title as AlbumName, m.Name as MediaType , g.Name as GenreName from Track t 
join Album al on t.AlbumId = al.AlbumId join MediaType m on t.MediaTypeId = m.MediaTypeId join Genre g on t.GenreId = g.GenreId;

---Query 7
select inv.InvoiceId, count(invl.InvoiceLineId) as NumberOfInvoiceLineItems from Invoice inv 
join InvoiceLine invl on inv.InvoiceId = invl.InvoiceId group by inv.InvoiceId;

---Query 8
select concat(e.Firstname,e.LastName) as SalesAgent, count(inv.InvoiceId) as TotalSales from Employee e join Customer c 
on e.EmployeeId = c.SupportRepId join Invoice inv on c.CustomerId=inv.CustomerId  group by concat(e.Firstname,e.LastName);

---Query 9
select concat(e.FirstName,e.LastName) as SalesAgent, count(c.CustomerId) as NumberOfCustomers  from Employee e join Customer c 
on e.EmployeeId = c.SupportRepId where e.Title='Sales Support Agent' group by concat(e.FirstName,e.LastName);

---Query 10
select Top 1 inv.BillingCountry, sum(inv.total) as TotalSales from Invoice inv group by inv.BillingCountry order by sum(inv.Total) desc;

---Query 11
select t.Name as TrackName, count(t.TrackId) as PurchasedCount from Track t join InvoiceLine invl on t.TrackId = invl.TrackId 
join Invoice inv on inv.InvoiceId = invl.InvoiceId where year(inv.InvoiceDate)=2013 group by t.Name order by count(t.TrackId) desc ;

---Query 12
select Top 1 m.Name as MediaType, count(t.MediaTypeId) as MostPurchasedTrack from Track t join InvoiceLine invl on invl.TrackId = t.TrackId
join invoice inv on inv.InvoiceId = invl.InvoiceId join MediaType m on m.MediaTypeId = t.MediaTypeId group by m.Name order by count(t.MediaTypeId) desc;

---Query 13
select Top 3 ar.Name as ArtistName, count(inv.InvoiceId) as SongsSold from Track t join InvoiceLine invl on invl.TrackId = t.TrackId 
join Invoice inv on inv.InvoiceId = invl.InvoiceId join Album al on al.AlbumId = t.AlbumId join Artist ar on ar.ArtistId = al.ArtistId 
group by ar.Name order by count(t.TrackId) desc;

---Query 14
select Top 1 concat(e.FirstName,e.Lastname) as SalesAgent, sum(inv.Total) as TotalAmount from Employee e join Customer c on c.SupportRepId = e.EmployeeId
join Invoice inv on c.CustomerId = inv.CustomerId group by concat(e.FirstName,e.Lastname) order by sum(inv.Total) desc;

---Query 15
select Top 1 concat(e.FirstName,e.Lastname) as SalesAgent, sum(inv.Total) as TotalAmount from Employee e join Customer c on c.SupportRepId = e.EmployeeId
join Invoice inv on c.CustomerId = inv.CustomerId where Year(inv.Invoicedate)=2010 group by concat(e.FirstName,e.Lastname) order by sum(inv.Total) desc;

---Query 16
select Top 1 concat(e.FirstName,e.Lastname) as SalesAgent, sum(inv.Total) as TotalAmount from Employee e join Customer c on c.SupportRepId = e.EmployeeId
join Invoice inv on c.CustomerId = inv.CustomerId where Year(inv.Invoicedate)=2009 group by concat(e.FirstName,e.Lastname) order by sum(inv.Total) desc;

---Query 17
select t.Name as TrackName,al.Title as AlbumName, m.Name as MediaType, g.Name as Genre from Track t 
join Album al on al.AlbumId = t.AlbumId join MediaType m on m.MediaTypeId = t.MediaTypeId
join Genre g on g.GenreId = t.GenreId;

