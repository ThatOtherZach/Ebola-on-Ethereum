# Ebola on Ethereum
It seems like a bad idea, but let's give it a try. This is a [live Smart Contract on Ethereum]() that delivers a link to a text file on [Swarm](http://swarm-gateways.net/bzz:/theswarm.eth/) (Ethereums decentralized storage) which contains the ebola virus genome. A full write up on this project can be [found on Medium]().

### There is no need to ever send Ether or ERC20 tokens to this contract! Functions are called on, not transactional which means usage is free.

However if you would like to send me a tip or buy me a coffee, use the Ethereum tip address in the contract (0x0).

## But... Why?
Why not? I've been meaning to do this for a long time (for science!), and with Ethereums smart contracts and decentraized storage it seemed like a good oppertunity to actaully give it a go. Sure I could have just put the genome on PasteBin and put the URL into a normal transaction... but where is the fun in that? It seemed like more fun and cooler to actually make a smart contract that serves the link to the file on Swarm.

So yeah, now you can get the URL to a file containing the ebola virus genome on the Ethereum blockchain via a smart contract! The only thing missing from this project is an "Ebola Token ICO"... Maybe next time ;)

## Smart Contract Address & ABI/JSON Interface
Address: [0x0]()

Contract ABI/JSON Interface:

```[{}]```

You can use [MyEtherWallet.com](https://www.myetherwallet.com/#contracts) to interact with the contract. Use the "Contracts" tab and paste in the address and ABI/JSON above into thier respective fields then click "Access". You'll then be able to interact with the functions via a dropdown button and see the returned results.

## Functions
- *“getInfo”* Returns basic text info of the contract.
- *“getEbola”* Returns a bit.ly link to the genome file (see note below).
- *“tipCreator”* Returns the creators Ethereum tip address if a user is feeling generous and or amused.
- *“kill”* The only function the creator has sole access to. This will destroy the contract and send any Ether in the contracts balance back to the creator.

A bit.ly URL was used because in order to truly decentralize the genome file it had to be hosted on Swarm. Swarm produces a unique hash string of the file which can be used to retrive the file in a browser (prefaced by http://swarm-gateways.net/bzz:/FILE-HASH). The hash string is 64 characters long, which is too long for ease of use in the contract and looks scarry. So using a URL shortner like bit.ly was an easy quick fix that still returns and re-directs to Swarm file.

### Expected Results For Functions
| Function      | Result Returned | Access        |
|:-------------:|:---------------:|:-------------:|
| *getInfo()*   | Two Text Strings | Public     |
| *getEbola()*  | URL String       | Public     |
| *tipCreator()* | One Text String, One Address String   | Public     |
| *kill()*      | Terminates the Contract | Creator Only |

## Connect with Web3.js
You will need a node on the main Ethereum network to interact with this contract via web3.

In the example javascript below we're using an [Infura API URL](https://infura.io/), this is free and you'll need to get one before runing the script. You will also need the [Web3.js (1.0.0 or later) Module](https://github.com/ethereum/web3.js/) and [Node.js (8.7.0 or later)](https://nodejs.org/en/) all saved in a project folder you're running this script from.

This script will work with the currently deployed contract, however you can swap out the address and ABI with your own or another contract and makes calls like this too.

``` javascript
// Require the Web3 Module
var Web3 = require('web3');

// Show Web3 where it needs to look for the Ethereum node
web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/YOUR-API-TOKEN-HERE'));

// Write to the console the script will run shortly
console.log('Contract-ing Ebola.....');

// Define the ABI of the contract, used to return the desired values
var abi = [ABI];

// Define the Ethereum address of the smart contract
var addr = "CONTRACT-ADDRESS";

// Build a new variable based on the Web3 API including the ABI and address of the contract
var EbolaContract = new web3.eth.Contract(abi, addr);

// Put it all together in a call and return the result to the console
EbolaContract.methods.getEbola().call().then(console.log);
```
