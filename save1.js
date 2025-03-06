// Contract ABI and Address
const savingsPoolAbi = [
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
];
const savingsPoolAddress = "0xd1d73f8E057225abe10702ac78f8Cf4107C598Ba"; // Replace with your contract address

// Connect to Ethereum (MetaMask)
let provider, signer, savingsPoolContract;

// Function to connect to MetaMask and initialize the contract
async function connectToContract() {
  if (window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      savingsPoolContract = new ethers.Contract(savingsPoolAddress, savingsPoolAbi, signer);
      console.log("Connected to MetaMask and contract!");

      // Update the UI to show the connected wallet address
      const userAddress = await signer.getAddress();
      document.getElementById("walletAddress").innerText = `Connected: ${userAddress}`;

      // Fetch and display savings data
      fetchSavingsData();
    } catch (error) {
      console.error("User denied account access or error connecting:", error);
      alert("Please connect your MetaMask wallet to continue.");
    }
  } else {
    alert("Please install MetaMask to use this application.");
  }
}

// Function to deposit funds
async function deposit() {
  const amount = document.getElementById("depositAmount").value;
  if (!amount || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  try {
    const tx = await savingsPoolContract.deposit({
      value: ethers.utils.parseEther(amount),
    });
    await tx.wait();
    alert("Deposit successful!");
    fetchSavingsData(); // Refresh data
  } catch (error) {
    console.error("Deposit failed:", error);
    alert("Deposit failed. Please try again.");
  }
}

// Function to withdraw funds
async function withdraw() {
  const amount = document.getElementById("withdrawAmount").value;
  if (!amount || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  try {
    const tx = await savingsPoolContract.withdraw(ethers.utils.parseEther(amount));
    await tx.wait();
    alert("Withdrawal successful!");
    fetchSavingsData(); // Refresh data
  } catch (error) {
    console.error("Withdrawal failed:", error);
    alert("Withdrawal failed. Please try again.");
  }
}

// Function to fetch and display savings data
async function fetchSavingsData() {
  try {
    const totalPoolBalance = await savingsPoolContract.getTotalPoolBalance();
    const formattedTotalBalance = ethers.utils.formatEther(totalPoolBalance);

    const userAddress = await signer.getAddress();
    const userBalance = await savingsPoolContract.balances(userAddress);
    const formattedUserBalance = ethers.utils.formatEther(userBalance);

    // Update the UI
    document.getElementById("userBalance").innerText = formattedUserBalance;
    document.getElementById("totalPoolBalance").innerText = formattedTotalBalance;
  } catch (error) {
    console.error("Error fetching savings data:", error);
  }
}

// Connect to MetaMask and the contract when the page loads
window.onload = connectToContract;