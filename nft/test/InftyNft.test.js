// NET7547:TYPE.CONTRACT:ACBXJ2EMFP8Y0N7BSMPHVCAC84CM8HD5NEFRT2XG9C
const InftyNft = artifacts.require("InftyNft");
const { expect } = require("chai");

contract("InftyNft contract", function (accounts) {
  let inftyNft;

  describe("burn function: ", function () {
    beforeEach(async () => {
      inftyNft = await InftyNft.deployed();
    });

    it("case 1:", async () => {
      await inftyNft.mint(accounts[0], "www.baidu.com");
      const oldBalance = await inftyNft.balanceOf(accounts[0]);
      await inftyNft.burn(1);
      const newBalance = await inftyNft.balanceOf(accounts[0]);
      expect((oldBalance - newBalance).toString()).to.equal("1");
    });
  });
});
