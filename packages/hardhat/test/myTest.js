const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("GTC Staking", function () {
  let stakingGTC;

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("StakingGTC", function () {
    it("Should deploy StakingGTC", async function () {
      const StakingGTC = await ethers.getContractFactory("StakingGTC");

      stakingGTC = await StakingGTC.deploy();
    });

    describe("stake()", function () {
      it("Should be able to stake GTC tokens", async function () {
        const gtcContract = ethers.getContract("GTC");
        // await gtcContract.approve();
      });

      // Uncomment the event and emit lines in stakingGTC.sol to make this test pass
      /* it("Should emit a SetPurpose event ", async function () {
        const [owner] = await ethers.getSigners();

        const newPurpose = "Another Test Purpose";

        expect(await stakingGTC.setPurpose(newPurpose)).to.
          emit(stakingGTC, "SetPurpose").
            withArgs(owner.address, newPurpose);
      }); */
    });
  });
});
