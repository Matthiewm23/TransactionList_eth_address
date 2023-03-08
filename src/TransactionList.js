import React, { useState, useEffect } from 'react';

const TransactionsList = ({ address, startBlock }) => { // We use this variable to separate the user actions from the the transactions we got
  const [transactions, setTransactions] = useState([]);
  const [status, setStatus] = useState(); // If "0", it means the API of etherscan detected an error (address, API key or start block), so we make sure = "1" to work
  const [lastblock, setLastblock] = useState(); // If "0", it means the API of etherscan detected an error (address, API key or start block), so we make sure = "1" to work


  useEffect(() => { // We use that to make no problem when we change the adress or the starting block

    const fetchTransactions = async () => {
      const apiKey = "7KT9JFYWU7UIGBUH4TV4QF21PTCE4W7UPN"; // My own API key I created 
      const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=${startBlock}&apikey=${apiKey}`); // Etherscan API use
      const data = await response.json(); // Transform the data in json
      setTransactions(data.result); // Take the results from the API
      setStatus(data.status); // Get the status, so that we know wether we have a list of transactions
    };
    fetchTransactions();

    const fetchLastBlock = async () => { 
        const apiKey = "7KT9JFYWU7UIGBUH4TV4QF21PTCE4W7UPN"; // My own API key I created 
        const response = await fetch(`https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${apiKey}`); // We want the number of the last block of the blockchain ethereum
        const data = await response.json(); // Transform the data in json
        setLastblock(parseInt(data.result,16));
      };
    fetchLastBlock();

  }, [address, startBlock]); // Two dependencies (input) of the use effect

  if (status === "1" && lastblock >= startBlock) { // If the status is one, we got transactions ! We want the startblock to be less than the last block of the blokchain 
      return (
        <div>
          <h2>List of the transactions</h2>
            <thead>
              <tr> {/* First ligne with all what will be displayed*/}
                <th>Block Number</th>
                <th>From</th>
                <th>To</th>
                <th>Value (eth)</th>
              </tr>
            </thead>
            <tbody> {/* the hash being different for each transactions, we can use it as a key to display all transactions */}
              {transactions.map((transaction) => ( 
                <tr key={transaction.hash}>
                  <td>{transaction.blockNumber}</td>
                  <td>{transaction.from}</td>
                  <td>{transaction.to}</td>
                  <td>{transaction.value / 10**18}</td> 
                </tr>
              ))}
            </tbody>
        </div>
      );
   
  } else if (status ==="0") { // If the status is  equal to "0", it means there is a problem - bad address, bad start block
    return (
      <div>
          <h3> If the address and the start block is correct, it means there is no transactions ! Orelse, check your address and the starting block </h3> 
      </div>
    );
  }
};

export default TransactionsList;

