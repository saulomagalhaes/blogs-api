const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
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

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "categories",
      through: PostCategory,
      foreignKey: "categoryId",
      otherKey: "postId",
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: "posts",
      through: PostCategory,
      foreignKey: "postId",
      otherKey: "categoryId",
    });
  };

  return PostCategory;
};

module.exports = PostCategory;
