CREATE DATABASE bookdb;

CREATE TABLE cities (
    city_id serial PRIMARY KEY,
    city_name VARCHAR (255) NOT NULL,
    population INT NOT NULL CHECK (population >= 0)
);