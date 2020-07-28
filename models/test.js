module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Test', {
        test_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        test: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        test_status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
}