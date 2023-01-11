const getToken = async (req, res) => {
    const { kushkiToken, kushkiPaymentMethod } = req.body

    res.status(200).json({
        kushkiToken,
        kushkiPaymentMethod
    })
}


module.exports = {
    getToken
}