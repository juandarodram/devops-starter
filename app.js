const express = require("express");

const app = express();

// Endpoint raíz
app.get("/", (req, res) => {
  res.send("DevOps v2 funcionando 🚀");
});

// Endpoint de health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Endpoint de usuarios
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Ana" },
    { id: 3, name: "Luis" }
  ];
  res.status(200).json(users);
});

module.exports = app;