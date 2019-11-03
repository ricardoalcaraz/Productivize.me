SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3005 (class 1262 OID 13117)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE habit WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';
CREATE DATABASE plant WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';
CREATE DATABASE time WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';
CREATE DATABASE profile WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';
CREATE DATABASE task WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';

ALTER DATABASE habit OWNER TO postgres;
ALTER DATABASE plant OWNER TO postgres;
ALTER DATABASE time OWNER TO postgres;
ALTER DATABASE profile OWNER TO postgres;
ALTER DATABASE task OWNER TO postgres;

\connect profile
CREATE TABLE profile (
	identifier VARCHAR(50) PRIMARY KEY,
	credential VARCHAR(20) NOT NULL,
	created_on TIMESTAMP NOT NULL,
	last_login TIMESTAMP NOT NULL
);

\connect plant
CREATE TABLE plant (
	identifier int PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	description VARCHAR(200) NULL
);

CREATE TABLE garden (
	user_id VARCHAR(50),
	plant_id int,
	level int,
	CONSTRAINT garden_pk PRIMARY KEY(user_id, plant_id)
);

\connect habit
CREATE TABLE frequency (
	identifier int PRIMARY KEY,
	frequency_description VARCHAR(20)
);

CREATE TABLE habit (
	identifier SERIAL PRIMARY KEY,
	user_id VARCHAR(50) NOT NULL,
	description VARCHAR(100) NOT NULL,
	created_on timestamp NOT NULL,
	start_date timestamp NOT NULL,
	end_date timestamp NULL,
	frequency_id int NOT NULL,
	FOREIGN KEY(frequency_id) REFERENCES frequency(identifier)
);

\connect task
CREATE TABLE task (
	identifier SERIAL PRIMARY KEY,
	date TIMESTAMP NULL,
	name VARCHAR(20) NOT NULL,
	description VARCHAR(50) NOT NULL,
	completed BOOLEAN NOT NULL,
	time_required VARCHAR(20) NULL
);

CREATE TABLE standalone_task (
	identifier SERIAL PRIMARY KEY,
	user_ID VARCHAR(50) NOT NULL
) INHERITS (task);

CREATE TABLE completed_task (
	identifier SERIAL PRIMARY KEY,
	task_ID INT NOT NULL,
	date_completed TIMESTAMP NOT NULL,
	user_ID VARCHAR(50) NOT NULL
);

CREATE TABLE subtask (
	parent_taskID INT NOT NULL,
	child_taskID INT NOT NULL,
	CONSTRAINT subtask_pk PRIMARY KEY(parent_taskID, child_taskID)
);

\connect time
CREATE TABLE time_keeping (
    identifier SERIAL PRIMARY KEY,
    task_ID INT NOT NULL,
    time_logged time NOT NULL
);