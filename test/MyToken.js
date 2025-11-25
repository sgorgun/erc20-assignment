const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  // a small "fixture" for deploying the contract before testing
  async function deployMyToken() {
    const [owner, user1, user2] = await ethers.getSigners();

    const initialSupply = ethers.parseEther("1000000");

    const myToken = await ethers.deployContract("MyToken", [initialSupply]);
    await myToken.waitForDeployment();

    return { myToken, owner, user1, user2, initialSupply };
  }

  it("Should deploy with correct initial supply to owner", async function () {
    const { myToken, owner, initialSupply } = await deployMyToken();

    const balance = await myToken.balanceOf(owner.address);
    expect(balance).to.equal(initialSupply);
  });

  it("Owner can mint tokens to another account", async function () {
    const { myToken, owner, user1 } = await deployMyToken();

    const amountToMint = ethers.parseEther("100");

    // mint called by the owner should succeed
    await myToken.connect(owner).mint(user1.address, amountToMint);

    const balanceUser1 = await myToken.balanceOf(user1.address);
    expect(balanceUser1).to.equal(amountToMint);
  });

  it("Non-owner cannot mint tokens", async function () {
    const { myToken, user1 } = await deployMyToken();

    const amountToMint = ethers.parseEther("100");

    // user1 is not the owner, mint should revert
    await expect(
      myToken.connect(user1).mint(user1.address, amountToMint)
    ).to.be.reverted;
  });

  it("Should transfer tokens between accounts", async function () {
    const { myToken, owner, user1, initialSupply } = await deployMyToken();

    const amount = ethers.parseEther("10");

    // owner -> user1
    await myToken.connect(owner).transfer(user1.address, amount);

    const ownerBalance = await myToken.balanceOf(owner.address);
    const user1Balance = await myToken.balanceOf(user1.address);

    expect(user1Balance).to.equal(amount);
    expect(ownerBalance).to.equal(initialSupply - amount);
  });

  it("Should fail when trying to transfer more than balance", async function () {
    const { myToken, user1, user2 } = await deployMyToken();

    // user1 has no tokens (balance 0)
    const amount = ethers.parseEther("1");

    await expect(
      myToken.connect(user1).transfer(user2.address, amount)
    ).to.be.reverted;
  });
});
