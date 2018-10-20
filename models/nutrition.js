module.exports = function(sequelize, DataTypes) {
    var Nutrition = sequelize.define("Nutrition", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
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
  