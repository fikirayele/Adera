CREATE DATABASE adera;

CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255),
    role VARCHAR(255),
    password VARCHAR(255)
);