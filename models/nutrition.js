module.exports = function(sequelize, DataTypes) {
    var Nutrition = sequelize.define("Nutrition", {
        profile_id : {
            primaryKey      : true,
            autoIncrement   : true,
            type            : DataTypes.INTEGER,
            allowNull       : false
        },
        Food:DataTypes.STRING,
        Calories: DataTypes.INTEGER,
        Fat:DataTypes.INTEGER,
        Carbohydrates: DataTypes.INTEGER,
        Protein: DataTypes. INTEGER
    });
  
    Nutrition.associate = function(models) {
      // We're saying that a Nutrition should belong to an User
      // A Nutrition can't be created without an User due to the foreign key constraint
      Nutrition.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Nutrition;
  };
  