// add the game address here and update the contract name if necessary
const gameAddr = "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    // const tx1 = await game.giveMeAllowance(20000);
    // await tx1.wait();
    // const tx2 = await game.mint(19000);
    // await tx2.wait();
  
    const tx3= await game.win(56); // i don't understand how this is not reverting

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx3.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
