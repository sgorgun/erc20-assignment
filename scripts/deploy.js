const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  // 1,000,000 tokens (18 decimal places — ERC20 standard)
  const initialSupply = ethers.parseEther("1000000");

  // Deploy the MyToken contract, passing initialSupply to the constructor
  const myToken = await ethers.deployContract("MyToken", [initialSupply]);

  // Wait for the deployment to complete
  await myToken.waitForDeployment();

  const address = await myToken.getAddress();
  console.log("MyToken deployed to:", address);
}

// Standard main function execution with error handling
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
