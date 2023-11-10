import { DataTypes } from "sequelize"

const produtoModel = (sequeliza, Sequelize) => {
    const Produto = sequelize.define('Produto', {
        // Model attributes are defined here
        nome: {
          type: DataTypes.STRING,
          allowNull: false
        },
        categoria: {
          type: DataTypes.STRING,
          // allowNull defaults to true
        },
        descricao: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        desconto: {
            type: DataTypes.INTEGER,
            // allowNull defaults to true
        },
        precoAntes: {
            type: DataTypes.DECIMAL,
            // allowNull defaults to true
        },
        precoDepois: {
            type: DataTypes.DECIMAL,
            // allowNull defaults to true
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            // allowNull defaults to true
        }
      }, {
        // Other model options go here
      });
      return Produto
}