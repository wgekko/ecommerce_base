import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb://localhost:27017";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Base de datos de comercio electrónico conectada correctamente!"))
    .catch((err) =>
      console.log(`Error de configuración de la conexión DB ${err.message}`)
    );
};

export default connectToDB;
