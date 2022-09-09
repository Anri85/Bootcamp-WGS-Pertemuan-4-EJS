const express = require("express");
const app = express();
const port = 5000;

app.set("view engine", "ejs");

// mendefinisikan route root (/) yang merender index.html
app.get("/", (req, res) => {
    res.render("index", {
        name: "Ramdhani Arya",
    });
});

// mendefinisikan route contact (/contact) yang merender contact.html
app.get("/contact", (req, res) => {
    res.render("contact");
});

// mendefinisikan route about (/about) yang merender about.html
app.get("/about", (req, res) => {
    res.render("about");
});

// menambahkan parameter product id dan query parameter category
app.get("/product/:productId", (req, res) => {
    res.send(`product id: ${req.params.productId}<br/>category id: ${req.query.category}`);
});

// mendefinisikan middleware jika halaman tidak ditemukan
app.use("/", (req, res) => {
    res.send("Page not found: 404");
    res.status(404);
});

// menjalankan express pada port
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});
