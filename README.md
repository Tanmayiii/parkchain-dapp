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
- Copy the private key of the **first account**.
- You'll use this in MetaMask.

### 4. 🔗 Connect MetaMask with Ganache

1. Open MetaMask → Add Network.
2. Fill in:
   - **Network Name**: Localhost 8545
   - **New RPC URL**: http://127.0.0.1:8545
   - **Chain ID**: 1337
3. Import the Ganache private key into MetaMask.

### 5. 💼 Compile and Deploy Smart Contract

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
```

### 6. 🔌 Connect React App to Contract

In your React code:

```js
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
