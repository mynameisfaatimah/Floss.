-- settings.sql
CREATE DATABASE floss;
CREATE USER flossuser WITH PASSWORD 'floss';
GRANT ALL PRIVILEGES ON DATABASE floss TO flossuser;