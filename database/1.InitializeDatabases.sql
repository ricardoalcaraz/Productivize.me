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
CREATE TABLE habit (
	identifier SERIAL PRIMARY KEY,
	user_id VARCHAR(50) NOT NULL,
	data jsonb
);

\connect task
CREATE TABLE task (
	identifier SERIAL PRIMARY KEY,
	user_id VARCHAR(50) NOT NULL,
	data jsonb
);

CREATE TABLE completed_task (
	identifier SERIAL PRIMARY KEY,
	task_id INT NOT NULL,
	date_completed TIMESTAMP NOT NULL,
	FOREIGN KEY (task_id) REFERENCES task(identifier)
);

CREATE TABLE subtask (
	parent_taskID INT NOT NULL,
	child_taskID INT NOT NULL,
	CONSTRAINT subtask_pk PRIMARY KEY(parent_taskID, child_taskID)
);

\connect time
CREATE TABLE time_keeping (
    identifier SERIAL PRIMARY KEY,
	user_id VARCHAR(50) NOT NULL,
    task_ID INT NOT NULL,
    time_logged time NOT NULL
);