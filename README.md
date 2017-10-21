# Ebola on Ethereum
This is a [live Smart Contract on Ethereum](https://etherscan.io/address/0xe16f391e860420e65c659111c9e1601c0f8e2818) that delivers a URL link to the text file of the ebola virus genome hosted on [Swarm](http://swarm-gateways.net/bzz:/theswarm.eth/) (Ethereum's decentralized storage). A full write up on this project can be [found on Medium]().

It seems like a bad idea, but let's give it a try.

### There is no need to ever send Ether or ERC20 tokens to this contract! Functions are called on, not transactional which means usage is free.

However if you would like to send me a tip or buy me a coffee, use the Ethereum tip address in the contract (0xf3b1c7ca8fc7427d57328664902d4bd257b2eb0f).

## But... Why?
Why not? I've been meaning to do this for a long time (for science!), and with Ethereum’s smart contracts and decentralized storage it seemed like a good opportunity to actually give it a go. Sure I could have just put the genome on PasteBin and put the URL into a normal transaction... but where is the fun in that? It seemed like more fun and cooler to actually make a smart contract that serves the link to the file on Swarm.

So yeah, now you can get the URL to a file containing the ebola virus genome on the Ethereum blockchain via a smart contract! The only thing missing from this project is an "Ebola Token ICO"... Maybe next time ;)

## Smart Contract Address & ABI/JSON Interface
**Address:** [0xe16f391e860420e65c659111c9e1601c0f8e2818](https://etherscan.io/address/0xe16f391e860420e65c659111c9e1601c0f8e2818)  
**Contract ABI/JSON Interface:**  
```[{"constant":true,"inputs":[],"name":"getEbola","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tipCreator","outputs":[{"name":"","type":"string"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]```

You can use [MyEtherWallet.com](https://www.myetherwallet.com/#contracts) to interact with the contract. Use the "Contracts" tab and paste in the address and ABI/JSON above into their respective fields then click "Access". You'll then be able to interact with the functions via a dropdown button and see the returned results.

## Functions
- *“getInfo”* Returns basic text info of the contract.
- *“getEbola”* Returns a bit.ly link to the genome file (see note below).
- *“tipCreator”* Returns the creators Ethereum tip address if a user is feeling generous and or amused.
- *“kill”* The only function the creator has sole access to. This will destroy the contract and send any Ether in the contracts balance back to the creator.

A bit.ly URL was used because in order to truly decentralize the genome file it had to be hosted on Swarm. Swarm produces a unique hash string of the file which can be used to retrieve the file in a browser (prefaced by http://swarm-gateways.net/bzz:/FILE-HASH). The hash string is 64 characters long, which is too long for ease of use in the contract and looks scarry. So using a URL shortener like bit.ly was an easy quick fix that still returns and re-directs to Swarm file.

### Expected Results For Functions
| Function      | Result Returned | Access        |
|:-------------:|:---------------:|:-------------:|
| *getInfo()*   | Two Text Strings | Public     |
| *getEbola()*  | URL String       | Public     |
| *tipCreator()* | One Text String, One Address String   | Public     |
| *kill()*      | Terminates the Contract | Creator Only |

## Meteor App
This is my first time with Meteor, be gentle. If there are errors below please point them out.

This is just a simple app that loads up the contract into a webpage. You will need Meteor (+1.5.2.2), and the MetaMask Chrome extension (used to connect to the Etherum Blockchain) to use the app locally, there is no website because I really don't want to pay to host this.

Just download the EthEbolaApp folder once you have meteor installed, and run ```meteor``` in the app folder. Then just access "localhost:3000" in your browser.

## Connect with Web3.js
You will need a node on the main Ethereum network to interact with this contract via web3.

In the example javascript below we're using an [Infura API URL](https://infura.io/), this is free and you'll need to get one before running the script. You will also need the [Web3.js (1.0.0 or later) Module](https://github.com/ethereum/web3.js/) and [Node.js (8.7.0 or later)](https://nodejs.org/en/) all saved in a project folder you're running this script from.

This script will work with the currently deployed contract, however you can swap out the address and ABI with your own or another contract and makes calls like this too.

``` javascript
// Require the Web3 Module
var Web3 = require('web3');

// Show Web3 where it needs to look for the Ethereum node
web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/YOUR-API-TOKEN-HERE'));

// Write to the console the script will run shortly
console.log('Contract-ing Ebola.....');

// Define the ABI of the contract, used to return the desired values
var abi = [{"constant":true,"inputs":[],"name":"getEbola","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tipCreator","outputs":[{"name":"","type":"string"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

// Define the Ethereum address of the smart contract
var addr = "0xe16f391e860420e65c659111c9e1601c0f8e2818";

// Build a new variable based on the Web3 API including the ABI and address of the contract
var EbolaContract = new web3.eth.Contract(abi, addr);

// Put it all together in a call and return the result to the console
// FUNCTION can be "getEbola", "getInfo", "tipCreator" and "kill"
EbolaContract.methods.FUNCTION().call().then(console.log);
```
