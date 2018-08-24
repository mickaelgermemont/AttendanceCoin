pragma solidity ^0.4.24;

import "./attendancecoin-erc20.sol";

contract AttendanceCoin_Faucet {
    address owner;

    FixedSupplyToken tokenAddress; // rinkeby 0xec3e464c32d99016eb1cf61236724cc73df2c064

    constructor() public {
        owner = msg.sender;
        tokenAddress = FixedSupplyToken(0x05e710AFeEBE27972e45F75ACA2D16Ec2C698F45);
    }

    function getAC() public returns (bool success){
        return tokenAddress.transfer(msg.sender, 8000000000000000000);
    }
}
