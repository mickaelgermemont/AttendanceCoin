
# AttendanceCoin

MVP Sucess rules for next week (August 13th 2018)
- A contract
- Deploy on testnet
- Distribution? to people who submitted issue or commented in issues on github? active on the slack also gets rewards?

MVP Sucess rules for next week (August 20th 2018)
- UI to show coin holders balance
  - [http://attendance-coin.s3-website-us-east-1.amazonaws.com/](https://github.com/vutsalsinghal/Attendance_Coin)
  - [http://attendancecoin.mickaelgermemont.com.s3-website-us-east-1.amazonaws.com/](feature_ux_acprofile/attendancecoin-react)

Lessons learned
- Metamask would display a balance of 0. we fixed the issue. we learned that when there are 18 decimals, the ERC20 contract behaves like ETH. if you transfer 20. you actually manipulate 20 wei. in order to transfer 20 AC, you have to send 20000000000000000000. 
- Adding features to a deployed contract is not easy. but we can use the following pattern https://dappsforbeginners.wordpress.com/tutorials/interactions-between-contracts/

Subjects for later
- How to make it worthwhile to own?
- Worthwhile because i can show it to employers?
- Worthwhile because i can use it to attend a meetup even if its full??
- What do you do with the coin? trade it for an interview?
- Multisignature?
- Use voting mechanism to add attibutes

# Attendance Coin is Class Cash
- It's a [ERC20 Token](https://github.com/ConsenSys/Tokens/blob/master/contracts/eip20/EIP20.sol), Fungible
- Contract available on rinkeby 0x05e710afeebe27972e45f75aca2d16ec2c698f45, https://rinkeby.etherscan.io/address/0x05e710afeebe27972e45f75aca2d16ec2c698f45
- Contract source code, [see](https://github.com/mickaelgermemont/AttendanceCoin/blob/master/contracts/attendancecoin-erc20.sol)
- Founders pool:
  - sent 333333333 to 0x8fb092b0c5d80d1f4a1a0ff17d5a638afe24cfce
  - sent 333333333 to 0x22323121a5ba2bf4d429d64b83c0ef943d760103

# Class Badge
- It's a [ERC721 Token](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721Token.sol), Collectible
- Could help build a leaderboard based on dapps created

# Blog / Steemit
- We could implement that. see DelegateCall.com - Fully Blockchain based Q&A. Earn tokens for answering questions.

# DAO / Governance / Voting
- Could help build a leaderboard based on dapps created

# Must do
- Post issues
- Share thoughtfull comments
- Interact with the contract on https://remix.ethereum.org/

# Join Trello
- click here to request access https://trello.com/invite/attendancecoin/59709ded0e3b3b30cc6ba057fb568b6a
- https://trello.com/attendancecoin

# Join our Slack
- http://bit.ly/LinniaProtocolSlack
Join #attendance-coin-msg channel
