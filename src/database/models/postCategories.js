const PostCategories = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define(
    "PostCategories",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "BlogPost",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "Category",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );

  PostCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "categories",
      through: PostCategories,
      foreignKey: "categoryId",
      otherKey: "postId",
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: "posts",
      through: PostCategories,
      foreignKey: "postId",
      otherKey: "categoryId",
    });
  };

  return PostCategories;
};

module.exports = PostCategories;
