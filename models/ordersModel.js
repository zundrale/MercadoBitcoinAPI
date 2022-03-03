module.exports = (sequelize, Sequelize) => {
    
    const table = sequelize.define('Orders', {
        orderType: {
            type: Sequelize.STRING
        },
        value: {
            type: Sequelize.DECIMAL
        },
        quantity: {
            type: Sequelize.DECIMAL
        }
    })

    return table
}
