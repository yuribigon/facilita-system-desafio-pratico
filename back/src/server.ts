import express from "express";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());

// Middleware para habilitar o CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get('/', (req, res) => res.json({ message: "server is running" }));

// Rotas
registerRoutes(app);

app.listen(8888, () => console.log("Server is running"));