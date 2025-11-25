// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(uint256 initialSupply)
        ERC20("MyToken", "MTK")
        Ownable(msg.sender) // set the contract owner (deployer)
    {
        _mint(msg.sender, initialSupply);
    }

    /// @notice Mint tokens. Only the contract owner can call this.
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
