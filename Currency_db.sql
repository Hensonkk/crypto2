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

alter table gold
rename column Closing_Price to gold_cp;
alter table gold
rename Volume to gold_v;


-- Create Bitcoin table
create table bitcoin (
	Month_Year date not null,
	Closing_Price decimal(30, 3) not null,
	Volume bigint not null,
	primary key (Month_Year) 
);

alter table bitcoin
rename column Closing_Price to bitcoin_cp;
alter table bitcoin 
rename Volume to bitcoin_v;


-- Create Silver table
create table silver ( 
	Month_Year date not null,
	Closing_Price decimal(15, 3) not null,
	Volume int not null,
	primary key (Month_Year)
);

alter table silver
rename column Closing_Price to silver_cp;
alter table silver
rename Volume to silver_v;

select * from gold;
select * from bitcoin;
select * from silver;

-- Combine the tables together
select gold.gold_cp , 
gold.gold_v , 
bitcoin.bitcoin_cp , 
bitcoin.bitcoin_v , 
silver.silver_cp , 
silver.silver_v ,
bitcoin.month_year 
from bitcoin
inner join gold on gold.month_year = bitcoin.month_year 
inner join silver on bitcoin.month_year = silver.month_year;








