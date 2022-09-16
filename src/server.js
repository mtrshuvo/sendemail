require("dotenv").config();
const app = require("./api/configuration/app");
const PORT = process.env.PORT || 3001 ;

app.listen(PORT, ()=>{
   console.log(`Listening on Port ${PORT}`);
})