### Eth-flip boilerplate 

Front-end:
- create-react-app (craco replaced react-scripts)
- tailwindcss (with postcss 7 and autoprefixer)

Backend:
- hardhat 
- OpenZeplin 
- ethersjs (recomended by OpenZeplin)
- web3js (default in hardhat)

Notes:

Create-react-app has been used to create this project 1st

### SETUP and How to run

To install the dependencies 

`npm install .  ` 

compile the backend smart contracts 1st 
`npx hardhat compile`

to test on your local machine load up the hardhat test network
and deploy contract(s)

`npx hardhat node`
`npx hardhat run --network localhost scripts/deploy.js`

now can run the frontend using craco 

`npm run start`

### Notes:

Although not recomended, you can disable eslint by adding <*> at the beginning of the 
.eslintignore file when testing the frontend.  

# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
