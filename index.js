const express = require('express');
const app = express();
const PORT = 8080;

const mysql = require('mysql2');

app.use(express.json());

// Esto me lo voy a tener que llevar. La contraseña la pondré luego que no subirla en un commit
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: "backEndPascua"
});

db.connect();

// Crear la base de datos que luego habrá que ir escondiendo
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE backEndPascua';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Crear la tabla Users
app.get('/createTableUsers', (req, res) => {
    let sql = `
        CREATE TABLE IF NOT EXISTS Users (
        UserId INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)
        )`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        console.log('Tabla Users creada exitosamente');
        res.send('Tabla Users creada exitosamente');
    });
});

// Crear la tabla Orders
app.get('/createTableOrders', (req, res) => {
    let sql = `
        CREATE TABLE IF NOT EXISTS Orders (
        OrderId INT PRIMARY KEY AUTO_INCREMENT,
        address VARCHAR(255),
        UserId INT,
        FOREIGN KEY (UserId) REFERENCES Users(UserId)
        )`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        console.log('Tabla Orders creada exitosamente');
        res.send('Tabla Orders creada exitosamente');
    });
});

// Crear la tabla Ordersproducts
app.get('/createTableOrdersproducts', (req, res) => {
    let sql = `
        CREATE TABLE IF NOT EXISTS Ordersproducts (
        OrderProductId INT PRIMARY KEY AUTO_INCREMENT,
        OrderId INT,
        ProductId INT,
        FOREIGN KEY (OrderId) REFERENCES Orders(OrderId),
        FOREIGN KEY (ProductId) REFERENCES Products(ProductId)
        )`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        console.log('Tabla Ordersproducts creada exitosamente');
        res.send('Tabla Ordersproducts creada exitosamente');
    });
});

// Crear la tabla Products
app.get('/createTableProducts', (req, res) => {
    let sql = `
        CREATE TABLE IF NOT EXISTS Products (
        ProductId INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255),
        price DECIMAL(10, 2),
        stock INT
        )`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        console.log('Tabla Products creada exitosamente');
        res.send('Tabla Products creada exitosamente');
    });
});

// Crear la tabla products_has_categories
app.get('/createTableProductsCategories', (req, res) => {
    let sql = `
        CREATE TABLE IF NOT EXISTS products_has_categories (
        ProductCategoryId INT PRIMARY KEY AUTO_INCREMENT,
        ProductId INT,
        CategoryId INT,
        FOREIGN KEY (ProductId) REFERENCES Products(ProductId),
        FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId)
        )`;
    db.query(sql, (error, results,fields) => {
        if (error) throw error;
        console.log('Tabla products_has_categories creada exitosamente');
        res.send('Tabla products_has_categories creada exitosamente');
        });
        });
        
// Crear la tabla Categories
app.get('/createTableCategories', (req, res) => {
    let sql = `CREATE TABLE IF NOT EXISTS Categories (CategoryId INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255))`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        console.log('Tabla Categories creada exitosamente');
        res.send('Tabla Categories creada exitosamente');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
});

