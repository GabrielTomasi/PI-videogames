const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Videogame", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    background_image: {
      type: DataTypes.STRING,
      defaultValue: "https://img.freepik.com/vector-gratis/controles-videojuegos-estilo-neon-pared-ladrillo_24908-58916.jpg?w=826&t=st=1694716074~exp=1694716674~hmac=285f78d703c8b89ead6b3151fe80ac6e9c0ed867a232be988c0e4760d280916a",
      allowNull: false
    },
    released: { type: DataTypes.DATEONLY, allowNull: false },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    
  },{ timestamps: false });
};
