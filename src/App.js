import React, { useState, useEffect } from 'react';
import ParkingLot from './components/ParkingLot';

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log("Connected:", accounts[0]);
      } catch (error) {
        console.error("Connection failed:", error);
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  };

  useEffect(() => {
    // Check if already connected
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <div className="App" style={{ padding: '2rem', backgroundColor: '#fffaf0' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#2b6777' }}>ParkChain – Digital Parking Pass</h1>
        <button
          onClick={connectWallet}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#6d4c41',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            transition: 'background 0.3s ease'
          }}
        >
          {walletAddress
            ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
            : '🔗 Connect Wallet'}
        </button>
      </div>

      <ParkingLot />
    </div>
  );
}

export default App;
