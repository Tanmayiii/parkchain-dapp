import { BrowserProvider, Contract } from "ethers";
import ParkingPassABI from "./abis/ParkingPass.json";

const CONTRACT_ADDRESS = "0x1f84c7c85DaE63AD36fDA870a136983315a78885"; // your deployed contract address

export async function connectContract() {
  if (!window.ethereum) {
    alert("Please install MetaMask.");
    return null;
  }

  try {
    // ✅ Create Ethers v6 provider
    const provider = new BrowserProvider(window.ethereum);

    // ✅ Get signer (connected account)
    const signer = await provider.getSigner();

    // ✅ Connect to contract using Ethers v6 style
    const contract = new Contract(CONTRACT_ADDRESS, ParkingPassABI.abi, signer);

    return contract;
  } catch (error) {
    console.error("Contract connection failed", error);
    return null;
  }
}
