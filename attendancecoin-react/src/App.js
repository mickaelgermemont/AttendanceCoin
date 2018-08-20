import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import web3 from './web3';
import attendancecoin from './dapp';

// https://rinkeby.etherscan.io/address/0x8c31cc3e155f9c4ef847f8c9968baf87a90e7682

class EthAddress extends Component {

  render() {
    const address = `https://rinkeby.etherscan.io/address/${this.props.address}`;
    const name = this.props.name;
    const balance = this.props.balance;
    return (<p><a href={address}>{name}</a> AC${balance}</p>);
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    //
    // Sam ; slack UBHLF5MAR ; https://github.com/swellander ; 0xbc148580f43b93aeea5ce7aa8e805bd6db13e8d1
    // ; slack UB8GRGLCR ; https://github.com/JaberJanati ; 0xd0c15fc18e640e4ca38b6cb2d61e274cd38057f4
    // Francis ; slack UBAQUSBNK ; https://github.com/fodisi ; 0x78A3fECa82d62698c9912b66A06e5c035776DB90
    // ; slack UBFCNJEAU ; https://github.com/Alchemist21 ; 0xAB44ea3d9128d2B9eFd35DDeE0B58955a747c7F6
    // ; slack ; https://github.com/renegmed ; 0x1b822f98ec5b54f7dc3c95d596f6bc82caa3078f
    // Chris ; slack UC7CHKRMX ; ; 0x1cb568a7eddb46437655f8022e86bc9b4060e6ea
    // Lavera ; slack UB908LSFM ; https://github.com/laveradesign ; 0x7d4a8Ee27a318e544b2c8939143EFf50838259E1
    //
    const sam = { name: 'Sam', slack: 'UBHLF5MAR', github: 'https://github.com/swellander', eth: '0xbc148580f43b93aeea5ce7aa8e805bd6db13e8d1', balance: '' }
    const jaberjanati = { name: 'JaberJanati', slack: 'UB8GRGLCR', github: 'https://github.com/JaberJanati', eth: '0xd0c15fc18e640e4ca38b6cb2d61e274cd38057f4', balance: '' }
    const fodisi = { name: 'Francis', slack: 'UBAQUSBNK', github: 'https://github.com/fodisi', eth: '0x78A3fECa82d62698c9912b66A06e5c035776DB90', balance: '' }
    const alchemist21 = { name: 'Alchemist21', slack: 'UBFCNJEAU', github: 'https://github.com/Alchemist21', eth: '0xAB44ea3d9128d2B9eFd35DDeE0B58955a747c7F6', balance: '' }
    const renegmed = { name: 'renegmed', slack: 'UBAQUSBNK', github: 'https://github.com/renegmed', eth: '0x1b822f98ec5b54f7dc3c95d596f6bc82caa3078f', balance: '' }
    const chist = { name: 'Chris', slack: 'UC7CHKRMX', github: '', eth: '0x1cb568a7eddb46437655f8022e86bc9b4060e6ea', balance: '' }
    const lavera = { name: 'Lavera', slack: 'UB908LSFM', github: 'https://github.com/laveradesign', eth: '0x7d4a8Ee27a318e544b2c8939143EFf50838259E1', balance: '' }

    const members = {}
    members[sam.name] = sam
    members[jaberjanati.name] = jaberjanati
    members[fodisi.name] = fodisi
    members[alchemist21.name] = alchemist21
    members[renegmed.name] = renegmed
    members[chist.name] = chist
    members[lavera.name] = lavera

    this.state = { members, owner: '', symbol: '', totalSupply: '', name: '', decimals: '', foundersPool: ['0x8fb092b0c5d80d1f4a1a0ff17d5a638afe24cfce', '0x22323121a5ba2bf4d429d64b83c0ef943d760103'], founder1Balance: '', founder2Balance: '', ownerBalance: '', myAddress: '', myBalance: '' };
    this.handleChangeMyEthAddress = this.handleChangeMyEthAddress.bind(this);
  }

  async componentDidMount() {
    const decimals = await attendancecoin.methods.decimals().call();
    this.setState({ decimals });

    const owner = await attendancecoin.methods.owner().call();
    const symbol = await attendancecoin.methods.symbol().call();
    const name = await attendancecoin.methods.name().call();
    const totalSupply = await this.totalSupply();
    const ownerBalance = await this.balanceOf_toAC(owner)
    const founder1Balance = await this.balanceOf_toAC(this.state.foundersPool[0])
    const founder2Balance = await this.balanceOf_toAC(this.state.foundersPool[0])
    this.setState({ owner, symbol, name, founder1Balance, founder2Balance, ownerBalance, totalSupply });

    const self = this
    Object.keys(this.state.members).forEach(async (k) => {
      const m = self.state.members[k]
      const balance = await self.balanceOf_toAC(m.eth)

      console.log('componentDidMount.members.forEach', m, balance)
      m.balance = balance
      self.setState( self.state.members )
    })
  }

  handleChangeMyEthAddress = async (event) => {
    const myAddress = event.target.value;
  //chris 0x1cb568a7eddb46437655f8022e86bc9b4060e6ea
    console.log('handleChangeMyEthAddress', myAddress)

    const myBalance = await this.balanceOf_toAC(myAddress)

    console.log('handleChangeMyEthAddress.myBalance', myBalance)

    this.setState({myAddress, myBalance});
  };

  numberToLocaleString(num) {
    return (num).toLocaleString('en')
  }

  toAC(wei) {
    return wei / Math.pow(10, this.state.decimals)
  }

  async balanceOf_toAC(address) {
    const balanceWei = await attendancecoin.methods.balanceOf(address).call()
    const ac = this.toAC(balanceWei)
    return this.numberToLocaleString(ac)
  }

  async totalSupply() {
    const totalSupplyWei = await attendancecoin.methods.totalSupply().call();
    const ac = this.toAC(totalSupplyWei)
    return this.numberToLocaleString(ac)
  }

  render() {

    //const founderOwner = this.state.foundersPool[0]
    const founder1 = this.state.foundersPool[0]
    const founder2 = this.state.foundersPool[1]

    const members = Object.keys(this.state.members).map( (key) => {
      const m = this.state.members[key]
      return (<EthAddress key={m.name} address={m.eth} name={m.name} balance={m.balance} />)
    })

    console.log('render members', members)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Attendance Coin Leaderboard</h1>
        </header>
        <p>Contract symbol {this.state.symbol} '{this.state.name}', totalSupply {this.state.totalSupply} decimals {this.state.decimals}</p>
        <EthAddress address={this.state.owner} name='owner' balance={this.state.ownerBalance}/>
        <EthAddress address={founder1} name='founder1' balance={this.state.founder1Balance}/>
        <EthAddress address={founder2} name='founder2' balance={this.state.founder2Balance}/>

        {members}

        <p>
          <label>Check my balance</label>
          <input type="text" value={this.state.myAddress} onChange={this.handleChangeMyEthAddress} />
          <label>AC${this.state.myBalance}</label>
        </p>
      </div>
    );
  }
}

export default App;
