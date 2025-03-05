// config.js

// Contract 1: Saving
const Saving = {
    address: '0xd1d73f8E057225abe10702ac78f8Cf4107C598Ba', // Replace with your contract address
    abi:[
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "member",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "Deposit",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "member",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "Withdrawal",
          "type": "event"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "name": "balances",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "deposit",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "member",
                  "type": "address"
              }
          ],
          "name": "getMemberBalance",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "getTotalPoolBalance",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "totalPoolBalance",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      }
  ]
  };
  
  // Contract 2: AnotherContract
  const membershipContract = {
    address: '0x281B327741C8B0E7f9dB3cBbdA88824884f0b69b', // Replace with your contract address
    abi:[
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "status",
                  "type": "bool"
              }
          ],
          "name": "MembershipStatusChanged",
          "type": "event"
      },
      {
          "inputs": [],
          "name": "register",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "unregister",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
              }
          ],
          "name": "isMember",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "name": "members",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      }
  ]
  };
  
  // Export the configurations
  module.exports = {
    saving,
    membershipContract
  };