import React, { useState } from 'react';
import TransactionsList from './TransactionList.js';

const App = () => {
  const [walletAddress, setWalletAddress] = useState(''); // Wallet address which can be changed by the user
  const [startBlock, setStartBlock] = useState(); // Start block which can be changed by the user
  const [displayTransactions, setDisplayTransactions] = useState(false); // Boolean to display transactions only when we will click the button

  const handleChangeAddress = (event) => { // Allow to change the value of the wallet address
    setWalletAddress(event.target.value);
  };

  const handleChangeStartBlock = (event) => { // Allow to change the value of the start block
      setStartBlock(event.target.value);

  };

  const handleFormSubmit = (event) => { // Allow to put the value to true when we click to the butumn and then display the transactions
    event.preventDefault(); 
    setDisplayTransactions(true);
  };

  return (
    <div>
      <h1>Please enter your wallet address and start block:</h1>

      <form onSubmit={handleFormSubmit}> {/* A form that when submitted will put the value to true */}

        <label>Wallet Address:</label>  {/* Change the value of the address and the start block*/}
        <input type="text" onChange={handleChangeAddress} />

        <label>Start Block:</label>
        <input type="number" onChange={handleChangeStartBlock} />

        <button type="submit"> Display Transactions</button> {/* Submit the form and call handleFormSubmit */}
      </form>

      {displayTransactions && <TransactionsList address={walletAddress} startBlock={startBlock} />} {/* If form has been submited, then we display the transactions*/}
    </div>
  );
};

export default App;
// const walletAddress = '0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5'; // Adress to check if it works (to put in the app).

