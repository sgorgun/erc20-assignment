## **README.md**

# MyToken – ERC20 Token (Hardhat Project)

This project demonstrates the development, deployment, and testing of an ERC20 token using **Solidity**, **OpenZeppelin**, **Hardhat**, and **Ethers.js**.

---

## 🚀 Features

* ERC20 implementation using OpenZeppelin
* Token name: **MyToken**
* Symbol: **MTK**
* Initial supply minted to deployer
* `mint()` function restricted to contract owner
* Unit testing using Mocha + Chai
* Deployment script using Ethers v6
* Fully compatible with **Hardhat v2.27.0** and **Solidity 0.8.28**

---

## 📁 Project Structure

```
contracts/
  MyToken.sol
scripts/
  deploy.js
test/
  MyToken.js
hardhat.config.js
package.json
```

---

## 📦 Installation

```bash
npm install
npm install @openzeppelin/contracts
```

---

## ⚙️ Compilation

```bash
npx hardhat compile
```

---

## 🧪 Running Tests

```bash
npx hardhat test
```

Example output:

```
MyToken
  ✔ Should deploy with correct initial supply
  ✔ Owner can mint tokens
  ✔ Non-owner cannot mint tokens
  ✔ Should transfer tokens between accounts
  ✔ Should fail when trying to transfer more than balance
```

---

## 🚀 Deployment (Local Hardhat Network)

1. Start the local node:

```bash
npx hardhat node
```

2. Deploy contract:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Example output:

```
Deploying contract with account: 0xf39F...
MyToken deployed to: 0x5FbD...
```

---

## 📝 Smart Contract

Main features from `MyToken.sol`:

* Inherits `ERC20` and `Ownable`
* Constructor mints initial supply to deployer
* `mint()` restricted to owner only
* Fully OpenZeppelin-compatible

---

## 📚 Technologies Used

* Hardhat 2.27.0
* Solidity 0.8.28
* OpenZeppelin Contracts
* Ethers.js v6
* Mocha / Chai

---

## 📜 License

MIT License.

---