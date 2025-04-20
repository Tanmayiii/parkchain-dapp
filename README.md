# 🚗 ParkChain – Blockchain-Based Digital Parking Pass System

A decentralized application for reserving parking slots with real-time sync and smart contract integration.

---

## 🛠 Technologies Used

- **ReactJS**
- **Ethereum (Hardhat + MetaMask)**
- **Firebase Realtime Database**
- **Ethers.js**
- **Smart Contracts (Solidity)**

---

## ⚙️ How to Run Locally

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/yourusername/parkchain-dapp.git
cd parkchain-dapp
```

### 2. 📦 Install Dependencies

```bash
npm install
```

### 3. 🧪 Start Ganache (Local Blockchain)

- Launch Ganache.
  Install Ganache (if not installed):
  ```bash
  npm install -g ganache
  ```
  Start Ganache on the command line:
  ```bash
  ganache
  ```
  This will launch a local Ethereum blockchain on http://127.0.0.1:8545 with 10 test accounts and private keys.
- Copy the private key of the **first account**.
  In the Ganache output, you’ll see 10 accounts with public addresses and private keys.
  Copy the private key of the first account. Example:
  ```vbnet
  (0) 0x1234...abcd
  Private Key: 0xabcdef1234...5678`
  ```
- You'll use this in MetaMask.

### 4. 🦊 Connect MetaMask to Ganache (Local Network)
This step allows your frontend React app to interact with the deployed contract using MetaMask.

✅ Add Ganache Network to MetaMask
Open MetaMask browser extension.

Click on the Network Dropdown → Add Network.

Choose “Add a network manually” and enter:

Network Name: Ganache Local

New RPC URL: http://127.0.0.1:8545

Chain ID: 1337

Currency Symbol: ETH

Click Save.

✅ Import Ganache Account into MetaMask
In MetaMask, click on your account icon → Import Account.

Paste the private key you copied from Ganache.

Click Import.

You’ll now see test ETH (usually 100 ETH) in your MetaMask wallet and connected to the Ganache Local Network.

### 5. 💼 Compile and Deploy Smart Contract

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
```

### 6. 🔌 Connect React App to Contract

In your React code:

```blockchain.js
import abi from '../artifacts/contracts/YourContract.sol/YourContract.json';
const contractAddress = "0x..."; // replace with deployed address
```

### 7. 🌐 Firebase Setup

- Create a project on [Firebase Console](https://console.firebase.google.com)
- Enable **Realtime Database**
- Update security rules (for testing only):

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

- Add your Firebase config in `firebase-config.js`.

### 8. 🚀 Start the React App

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ✅ Features

- Book/cancel parking slots with wallet confirmation
- QR Code for verification
- Firebase for real-time sync
- Clean UI with drive lanes, entrance/exit

---

## 📁 Folder Structure

```
parkchain-app/
├── contracts/
├── scripts/
├── public/
├── src/
│   ├── components/
├── hardhat.config.js
├── package.json
└── README.md
```

---

## 📚 Dependencies

```json
"ethers": "^6.0.0",
"firebase": "^9.0.0",
"qrcode.react": "^3.1.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.0",
"hardhat": "^2.17.0"
```

---

## 🔐 Note

Update Firebase rules for production and restrict unauthorized access.
