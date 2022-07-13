const BlogPosts = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define(
    "BlogPosts",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      published: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "published",
      updatedAt: "updated",
      tableName: "BlogPosts",
    }
  );

  BlogPosts.associeate = (models) => {
    BlogPosts.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "users",
    });
  };

  return BlogPosts;
};

module.exports = BlogPosts;
