module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        profile_id : {
            primaryKey      : true,
            autoIncrement   : true,
            type            : DataTypes.INTEGER,
            allowNull       : false
        },
        name: DataTypes.STRING,
      email : {
        type : DataTypes.STRING,
        
        isUnique :true,
        allowNull:false,
        validate:{
            isEmail : true
        }
      },
     password: {
      type: DataTypes.STRING,
      allowNull: false
    }
    });
    return User;
  };
  