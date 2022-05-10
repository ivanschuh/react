const mongoose = require("mongoose");
const uri =
  "mongodb+srv://admin:admin@cluster0.stkny.mongodb.net/baserequisicoes?retryWrites=true&w=majority";
mongoose.connect(uri, {});
