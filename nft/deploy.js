const InftyNFT = artifacts.require("InftyNft");

module.exports = function(deployer) {
  deployer.deploy(InftyNFT);
}
