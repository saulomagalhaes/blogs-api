const PostCategories = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define(
    "PostCategories",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "BlogPosts",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );

  PostCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: "categories",
      through: PostCategories,
      foreignKey: "categoryId",
      otherKey: "postId",
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: "posts",
      through: PostCategories,
      foreignKey: "postId",
      otherKey: "categoryId",
    });
  };

  return PostCategories;
};

module.exports = PostsCategories;
