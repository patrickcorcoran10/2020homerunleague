module.exports = function (sequelize, DataTypes) {
  const League = sequelize.define("Leagues", {
    items: {
      type: DataTypes.STRING,
    },
    checked: DataTypes.BOOLEAN,
  });
  return League;
};
