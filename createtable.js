
create table Users (
	number_user BIGINT primary key not null,
	password VARCHAR(10) not null,
	full_name VARCHAR (40) not null,
	email VARCHAR (40) not null,
	birthdate DATE not null,
	acc_status VARCHAR (20) null,
	user_status VARCHAR (20) null,
	is_superuser BOOLEAN null)

	
create table Records (
	id_record BIGINT primary key not null,
	number_user BIGINT not null references Users (number_user),
	date_create DATE null,
	date_admis DATE null,
	time_start TIME null,
	time_end TIME null,
	status VARCHAR (20) not null,
	rating_rewiew DECIMAL null,
	text_rewiew VARCHAR (30) null)
	
create table Masters (
	fullname_mast VARCHAR(50) primary key not null,
	inform_add VARCHAR(50) null)
	

create table Services (
	title_serv VARCHAR(30) primary key not null,
	time_serv TIME not null,
	price INT not null,
	add_inf VARCHAR (50) null)
	
create table Masters_Services (
	id_ms INT primary key not null,
	title_serv VARCHAR(50) not null references Services (title_serv),
	fullname_mast VARCHAR(50) not null references Masters (fullname_mast))

create table Time_slots (
	id_slot INT primary key not null,
	id_ms INT not null references Masters_Services (id_ms),
	id_record BIGINT not null references Records (id_record),
	fullname_mast VARCHAR(50) not null references Masters (fullname_mast),
	number_slot INT not null,
	date_slot DATE not null,
	status_slot VARCHAR (20) null)

	
