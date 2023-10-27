-- Create tables for each currency csv file

-- Dropping tables if they already exist (No tables currently being used)
drop table if exists gold;
drop table if exists bitcoin;
drop table if exists silver;

-- Create Gold table
create table gold (
	Month_Year date not null,
	Closing_Price decimal(15, 3) not null,
	Volume int not null,
	primary key (Month_Year)
);

-- Create Bitcoin table
create table bitcoin (
	Month_Year date not null,
	Closing_Price decimal(30, 3) not null,
	Volume bigint not null,
	primary key (Month_Year)
);

-- Create Silver table
create table silver ( 
	Month_Year date not null,
	Closing_Price decimal(15, 3) not null,
	Volume int not null,
	primary key (Month_Year)
);

select * from gold;
select * from bitcoin;
select * from silver;