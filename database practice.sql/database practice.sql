_ _ Step 1: Create a table to hold user information
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    user_name VARCHAR(50),
    country VARCHAR(50),
    account_balance DECIMAL(10, 2)
) ;
_ _ Step 2:Insert some mock data into our table
INSERT INTO users (user_id, user_name, country, account_balance)
VALUES
(1, 'happiness_dev', 'Nigeria', 25000.00),
(2, 'alex_code', 'kenya', 12000.00),
(3, 'crypto_king', 'Ghana', 45000.00),

_ _ Step 3: Write a query to look at our data 
SELECT * FROM users WHERE country = 'Nigeria',
_ _ Step 4: Sort all users by balance from highest to lowest
SELECT * FROM users
ORDER BY account_balance DESC;
_ _ Step5: Calculate the avarage account balance of all users
SELECT AVG(account_balance) FROM users;