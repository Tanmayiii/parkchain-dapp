const hre = require("hardhat");

async function main() {
  const ParkingPass = await hre.ethers.getContractFactory("ParkingPass");
  const parkingPass = await ParkingPass.deploy(); // <-- FIXED HERE
  await parkingPass.waitForDeployment();          // <-- FIXED HERE

  console.log(`✅ Contract deployed to: ${parkingPass.target}`); // <-- target instead of address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
