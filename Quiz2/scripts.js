require('dotenv').config();

const ethers=require('ethers');

const PUBLIC_KEY= process.env.PUBLIC_KEY

const PRIVATE_KEY= process.env.PRIVATE_KEY;

const API_URL=process.env.API_URL;

 

 const contractAddress= process.env.CONTRACT_ADDRESS;

const contract_abis=require("./artifacts/nadraAbi.json");



let networkProvider = new ethers.providers.JsonRpcProvider(API_URL);



const contract = new ethers.Contract(contractAddress,contract_abis,networkProvider);



async function addDetail(id,name,cnic,address,DoB,treeNum){



    let wallet = new ethers.Wallet(PRIVATE_KEY,networkProvider);

    let contractsign= new ethers.Contract(contractAddress,contract_abis,wallet);

           

    const update = await contractsign.addDetail(id,name,cnic,address,DoB,treeNum);



    console.log("Details Added");



}

