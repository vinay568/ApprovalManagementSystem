create table Playlist(Playlistid int constraint primaryKey_id primary key, name nvarchar(20));

create table Artist(Artistid int constraint primary_key_id primary key, name nvarchar(20));

create table Album(Albumid int constraint primary_id primary key, Title nvarchar(20),
Artistid int constraint Foreign_key_id Foreign Key references Artist(Artistid));

create table Genre(Genreid int constraint primarykey_genreid primary key, name nvarchar(20));

create table Media(Mediaid int constraint primarykey_mediaid primary key, name nvarchar(20));

create table Track(Trackid int constraint primarykey_trackid primary key,
Name nvarchar(20),
Albumid int constraint Foreignkey_albumid Foreign Key references Album(Albumid),
MediaTypeid int constraint Foreign_key_mediatypeid Foreign Key references Media(Mediaid),
Genreid int constraint Foreign_key_genreid Foreign Key references Genre(Genreid),
composer nvarchar(30),
Milliseconds Bigint,
bytes bigint,
unitprices bigint
);
create table PlaylistTrack(playListTrackid int constraint primarykey_playlisttrackid primary key,
Playlistid int constraint Foreignkey_playlistid Foreign Key references Playlist(Playlistid),
Trackid int constraint Foreignkey_trackid Foreign Key references Track(Trackid),
);

create table Customer(Customerid int constraint primarykey_customerid primary key,
FirstName nvarchar(20),
LastName nvarchar(20),
Company varchar(50),
Address varchar(50),
City varchar(20),
State varchar(20),
Country varchar(20),
Postal_code int,
Phone bigint
);

create table invoice(Invoiceid int constraint primarykey_invoiceid primary key,
Customerid int constraint Foreignkey_customerid Foreign Key references Customer(Customerid),
InvoiceDate date,
BillingAddress varchar(50),
BillingCity varchar(20),
BillingState varchar(20),
BillingCountry varchar(20),
BillingPostal_code int,
Total money
);

create table InvoiceLine(InvoiceLineid int constraint primarykey_invoicelineid primary key,
Invoiceid int constraint Foreignkey_invoiceid Foreign Key references Invoice(Invoiceid),
Trackid int constraint Foreign_key_trackid Foreign Key references Track(Trackid),
UnitPrice money,
Quantity int
);
