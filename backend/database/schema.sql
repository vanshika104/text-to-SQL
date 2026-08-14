CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER REFERENCES departments(id),
    joining_date DATE
);

INSERT INTO departments (name)
VALUES
    ('Engineering'),
    ('Human Resources'),
    ('Marketing'),
    ('Finance');

INSERT INTO employees (name, salary, department_id, joining_date)
VALUES
    ('Rahul Sharma', 75000, 1, '2023-06-15'),
    ('Priya Singh', 62000, 1, '2024-02-10'),
    ('Aman Verma', 45000, 2, '2023-09-20'),
    ('Neha Gupta', 55000, 3, '2024-05-12'),
    ('Rohit Kumar', 90000, 1, '2022-11-01'),
    ('Ananya Mehta', 48000, 2, '2024-07-18'),
    ('Karan Malhotra', 68000, 4, '2023-03-25'),
    ('Simran Kaur', 52000, 3, '2025-01-10'),
    ('Arjun Patel', 82000, 1, '2022-08-30'),
    ('Riya Kapoor', 58000, 4, '2024-11-05');