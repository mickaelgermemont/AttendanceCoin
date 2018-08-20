import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import web3 from './web3';
import attendancecoin from './dapp';
import Big from 'big.js';

// https://rinkeby.etherscan.io/address/0x8c31cc3e155f9c4ef847f8c9968baf87a90e7682

function toEtherScanUrl(address){
  return `https://rinkeby.etherscan.io/address/${address}`;
}

function numberToLocaleString(num) {
  return (num).toLocaleString('en', { minimumFractionDigits: 18 })
}

class EthAddress extends Component {

  constructor(props) {
    super(props);
    this.handleSendTo = this.handleSendTo.bind(this);
  }

  handleSendTo = async (event) => {
    //const myAddress = event.target.value;
    //console.log('handleSendTo', myAddress, _address)
    const name = this.props.name;
    this.props.selectRewardRecipient(this.props.address);

    //this.setState({rewardRecipient: this.props.address})
    console.log('handleSendTo', name, this.props.address)
  }

  render() {
    //const address = `https://rinkeby.etherscan.io/address/${this.props.address}`;
    const address = toEtherScanUrl(this.props.address);
    const name = this.props.name;
    const balance = numberToLocaleString(this.props.balance);
    const github = this.props.github;

    let githubhtml;
    if(this.props.githubIcon) {
      githubhtml = (<a href={github}><img alt='github icon' src={this.props.githubIcon} height='25px' width='25px' /> </a>)
    } else {
      githubhtml = (<a href={github}><img alt='github icon' src='/GitHub-Mark-32px.png' height='25px' width='25px' /> </a>)
    }

    return (<div>
      <div className='box100'>
        {githubhtml}
      </div>
      <div className='box200'>
        <a href={address}><div className='rinkeby'>{name}</div></a>
      </div>
      <div className='box50'>
        <img alt='AC token icon' src='/ac1.jpg' height='25px' width='25px' />
      </div>
      <div className='box400'>
        AC${balance}
      </div>
      <div className='box100'>
        <button onClick={this.handleSendTo}>Select for reward</button>
      </div>
    </div>);
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
    const owner = { name: 'Mick', slack: 'UBDPFPTR9', github: 'https://github.com/mickaelgermemont', githubIcon: 'https://avatars1.githubusercontent.com/u/5587086?s=40&v=4', eth: '0x8c31cC3E155f9C4ef847F8C9968BAf87A90E7682', balance: '' }
    const futsal = { name: 'vutsalsinghal', slack: 'UBA4U9PDM', github: 'https://github.com/vutsalsinghal', githubIcon: 'https://avatars2.githubusercontent.com/u/7466579?s=88&v=4', eth: '0x8fb092b0c5d80d1f4a1a0ff17d5a638afe24cfce', balance: '' }
    const adrian = { name: 'Adrian', slack: 'UBFTUPXJ7', github: 'https://github.com/Adrianf23', githubIcon: 'https://avatars3.githubusercontent.com/u/21017300?s=88&v=4', eth: '0x22323121a5ba2bf4d429d64b83c0ef943d760103', balance: '' }

    const sam = { name: 'Sam', slack: 'UBHLF5MAR', github: 'https://github.com/swellander', githubIcon: 'https://avatars0.githubusercontent.com/u/22231097?s=88&v=4', eth: '0xbc148580f43b93aeea5ce7aa8e805bd6db13e8d1', balance: '' }
    const jaberjanati = { name: 'JaberJanati', slack: 'UB8GRGLCR', github: 'https://github.com/JaberJanati', githubIcon: 'https://avatars3.githubusercontent.com/u/6686191?s=88&v=4', eth: '0xd0c15fc18e640e4ca38b6cb2d61e274cd38057f4', balance: '' }
    const fodisi = { name: 'Francis', slack: 'UBAQUSBNK', github: 'https://github.com/fodisi', githubIcon: 'https://avatars1.githubusercontent.com/u/36540281?s=40&amp;v=4', eth: '0x78A3fECa82d62698c9912b66A06e5c035776DB90', balance: '' }
    const alchemist21 = { name: 'Alchemist21', slack: 'UBFCNJEAU', github: 'https://github.com/Alchemist21', githubIcon:'https://avatars0.githubusercontent.com/u/35514769?s=88&v=4', eth: '0xAB44ea3d9128d2B9eFd35DDeE0B58955a747c7F6', balance: '' }
    const renegmed = { name: 'renegmed', slack: 'UBAQUSBNK', github: 'https://github.com/renegmed', githubIcon:'https://avatars1.githubusercontent.com/u/1263410?s=88&v=4', eth: '0x1b822f98ec5b54f7dc3c95d596f6bc82caa3078f', balance: '' }
    const chist = { name: 'Chris', slack: 'UC7CHKRMX', github: '', eth: '0x1cb568a7eddb46437655f8022e86bc9b4060e6ea', balance: '' }
    const lavera = { name: 'Lavera', slack: 'UB908LSFM', github: 'https://github.com/laveradesign', githubIcon:'https://avatars3.githubusercontent.com/u/12753839?s=88&v=4', eth: '0x7d4a8Ee27a318e544b2c8939143EFf50838259E1', balance: '' }

    const members = {}
    members[sam.name] = sam
    members[jaberjanati.name] = jaberjanati
    members[fodisi.name] = fodisi
    members[alchemist21.name] = alchemist21
    members[renegmed.name] = renegmed
    members[chist.name] = chist
    members[lavera.name] = lavera

    this.state = { members, owner, symbol: '', totalSupply: '', name: '', decimals: '', foundersPool: [futsal, adrian], myAddress: '', myBalance: '', sendAc: '', sendAcAmount: '', rewardRecipient: '' };
    this.handleChangeMyEthAddress = this.handleChangeMyEthAddress.bind(this);
    this.handleChangeSendAc = this.handleChangeSendAc.bind(this);
    this.handleSendAcSubmit = this.handleSendAcSubmit.bind(this);
  }

  async componentDidMount() {
    const decimals = await attendancecoin.methods.decimals().call();
    this.setState({ decimals });

    const symbol = await attendancecoin.methods.symbol().call();
    const name = await attendancecoin.methods.name().call();
    const totalSupply = await this.totalSupply();
    this.setState({ symbol, name, totalSupply });

    //const owner = await attendancecoin.methods.owner().call();
    const owner = this.state.owner;
    const ownerBalance = await this.balanceOf(owner.eth)
    this.state.owner.balance = ownerBalance;
    this.setState({ owner });

    const foundersPool = this.state.foundersPool
    const founder1Balance = await this.balanceOf(foundersPool[0].eth)
    const founder2Balance = await this.balanceOf(foundersPool[1].eth)
    foundersPool[0].balance = founder1Balance;
    foundersPool[1].balance = founder2Balance;
    this.setState({ foundersPool });

    const self = this
    Object.keys(this.state.members).forEach(async (k) => {
      const m = self.state.members[k]
      const balance = await self.balanceOf(m.eth)

      console.log('componentDidMount.members.forEach', m, balance)
      m.balance = balance
      self.setState( self.state.members )
    })
  }

  selectRewardRecipient = (address) => {
    console.log('selectRewardRecipient', address)
    this.setState({rewardRecipient: address})
  }

  handleChangeSendAc = async (event) => {
    const v = event.target.value;
    // this.state.sendAc
    this.setState( {sendAc: v, sendAcAmount: numberToLocaleString(v / Math.pow(10, this.state.decimals))} )
    console.log('handleChangeSendAc', v)
  }

  handleSendAcSubmit = async (event) => {
    console.log('handleSendAcSubmit.to', this.state.rewardRecipient, 'amoutDisplay', this.state.sendAcAmount, 'amout', this.state.sendAc)
  }

  handleChangeMyEthAddress = async (event) => {
    const myAddress = event.target.value;

    try {
    //chris 0x1cb568a7eddb46437655f8022e86bc9b4060e6ea
      console.log('handleChangeMyEthAddress', myAddress)

      const myBalance = await this.balanceOf(myAddress)

      console.log('handleChangeMyEthAddress.myBalance', myBalance)

      this.setState({myAddress, myBalance});
    } catch(e){
      console.log('handleChangeMyEthAddress.myBalance.err', e)
      const myBalance = `error: ${e.message}`;
      this.setState({myAddress, myBalance});
    }
  };

  numberToLocaleString4(num) {
    return (num).toLocaleString('en', { minimumFractionDigits: 4 })
  }

  toAC(wei) {
    console.log('toAC(wei)=', wei)
    //return parseFloat(wei) / Math.pow(10, this.state.decimals)
    return new Big(wei).div(new Big(Math.pow(10, this.state.decimals))).toFixed(18)
  }

  async balanceOf(address) {
    const balanceWei = await attendancecoin.methods.balanceOf(address).call()
    console.log('balanceOf', address, balanceWei, typeof balanceWei, this.toAC(balanceWei))
    return this.toAC(balanceWei)
    //return this.numberToLocaleString(balanceWei)
  }

  async balanceOf_toAC(address) {
    const balanceWei = await attendancecoin.methods.balanceOf(address).call()
    const ac = this.toAC(balanceWei)
    return numberToLocaleString(ac)
    //return this.numberToLocaleString(balanceWei)
  }

  async totalSupply() {
    const totalSupplyWei = await attendancecoin.methods.totalSupply().call();
    const ac = this.toAC(totalSupplyWei)
    return numberToLocaleString(ac)
  }

  render() {

    //const founderOwner = this.state.foundersPool[0]
    //const owner = this.state.owner
    const founder1 = this.state.foundersPool[0]
    const founder2 = this.state.foundersPool[1]

    const memberToLi = (m) => {
      return (<li key={m.name}><EthAddress address={m.eth} slack={m.slack} github={m.github} name={m.name} balance={m.balance} githubIcon={m.githubIcon} selectRewardRecipient={this.selectRewardRecipient} /></li>)
    }

    const members = Object.keys(this.state.members).map( (key) => {
      const m = this.state.members[key]
      return memberToLi(m)
    })

    console.log('render members', members)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Attendance Coin Leaderboard</h1>
        </header>

        <div className="box600 card">
          <div className="container">
            <ul className="acaddresslist">
              <li><div className="box200">Contract symbol</div> <div className="box200 tokenmetadata">{this.state.symbol} </div></li>
              <li><div className="box200">Name</div> <div className="box200 tokenmetadata">{this.state.name} </div></li>
              <li><div className="box200">Supply</div> <div className="box200 tokenmetadata">{this.state.totalSupply} </div></li>
              <li><div className="box200">Decimals</div> <div className="box200 tokenmetadata">{this.state.decimals} </div></li>
              <li><div className="box200">TESTNET@</div> <div className="box200 tokenmetadata"><a href={toEtherScanUrl(attendancecoin.options.address)}>here</a> </div></li>
              <li><a href='https://github.com/mickaelgermemont/AttendanceCoin'>Contribute</a></li>
            </ul>
          </div>
        </div>

        <ul className="acaddresslist">
          {memberToLi(this.state.owner)}
          {memberToLi(founder1)}
          {memberToLi(founder2)}
        </ul>

        <ul className="acaddresslist">{members}</ul>

        <ul className="acaddresslist">
          <li>
            <div className="box600">
              <div className="box200"> <label>Check my balance </label> </div>
              <div className="box200"> <input type="text" value={this.state.myAddress} onChange={this.handleChangeMyEthAddress} /> </div>
              <div className="box200"> <label>AC${this.state.myBalance}</label> </div>
            </div>
          </li>
          <li>
            <div className="box">
              <div className="box200"> <label>Reward going to {this.state.rewardRecipient}</label> </div>
              <div className="box100"> <input type="text" size="28" value={this.state.sendAc} onChange={this.handleChangeSendAc} /> </div>
              <div className="box100"> {this.state.sendAcAmount} </div>
              <div className="box100"> <button onClick={this.handleSendAcSubmit}>REWARD!</button> </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
