// var api = require('etherscan-api').init('7KT9JFYWU7UIGBUH4TV4QF21PTCE4W7UPN'); // Initilization with my API key of Etherscan

// var address = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';
// var balance = api.account.balance(address); 
// var block = api.proxy.eth_blockNumber();

// balance.then(function(balanceData){
//   console.log(balanceData);
// });

// block.then(function(blk){
//     console.log(blk);
//   });

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // npm install xmlhttprequest (to do)

// var getJSON = function(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function() {
//       var status = xhr.status;
//       if (status === 200) {
//         callback(null, xhr.response);
//       } else {
//         callback(status, xhr.response);
//       }
//     };
//     xhr.send();
// };

// getJSON('https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=7KT9JFYWU7UIGBUH4TV4QF21PTCE4W7UPN',
// function(err, data) {
//   if (err !== null) {
//     console.log('Something went wrong: ' + err);
//   } else {
//     console.log('My response is :  ' + data);
//   }
// });

// https://ethereum.stackexchange.com/questions/132298/etherscan-sends-back-garbage-values-through-api-for-the-same-query-that-works-on 
// ptet voir au dessus peut etre pertinent 

// a voir lui aussi : https://consensys.net/blog/developers/how-to-fetch-and-update-data-from-ethereum-with-react-and-swr/

// https://virendraoswal.com/access-ethereum-data-via-web3js-and-infuraio

// import fetch from 'node-fetch';

import fetch from 'node-fetch';

fetch('https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=7KT9JFYWU7UIGBUH4TV4QF21PTCE4W7UPN')
  .then((response) => response.json())
  .then((data) => console.log("my response is : " + data.status))
  .catch((err) => console.log("something went wrong: " + err));

// import fetch from 'node-fetch';

// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();

// console.log(data);

fetch('https://api.etherscan.io/api?module=account&action=balancemulti&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a,0x63a9975ba31b0b9626b34300f7f627147df1f526,0x198ef1ec325a96cc354c7266a038be8b5c558f67&tag=latest&apikey=7KT9JFYWU7UIGBUH4TV4QF21PTCE4W7UPN')
.then((response) => response.json())
.then((data) => console.log("my response 2  is : " + data.result[0].account))
.catch((err) => console.log("something went wrong: " + err));