const { ethers, upgrades } = require("hardhat");
//const BigNumber = require('bignumber.js');

async function StakingDeploy() {
    const StakingContract = await ethers.getContractFactory("Staker");

    const staking = await StakingContract.deploy();

    console.log('Staking Contract deployed at:', staking.address);
    console.log('Transaction hash:', staking.deployTransaction.hash);
}

StakingDeploy()
    .then
    (function () {
        process.exit(0);
    })