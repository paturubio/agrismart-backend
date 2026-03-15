const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
 res.send("Backend Agrismart funcionando ");
});
app.use("/api/auth", authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});