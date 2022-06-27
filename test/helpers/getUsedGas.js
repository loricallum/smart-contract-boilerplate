// All estimates are using common gas price and eth to usd rate.
const gasPrice = 2 * Math.pow(10, 9); // 2 GWei
const ethToUsdRate = 900; // 1 ETH = $900

module.exports = {
    getUsedGas: (tx) => `${ tx.receipt.gasUsed } gas (~$${
        Math.round(tx.receipt.gasUsed * gasPrice / Math.pow(10, 18) * ethToUsdRate * 10000) / 10000
    })`,
    gasPrice: gasPrice,
    ethToUsdRate: ethToUsdRate
}