require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remain solid hidden process sure squirrel'; 
let testAccounts = [
"0xc539f5fde1378d62c7d4b75da2b64d53efc50f3101bc39ce76e5193b18c7b4bc",
"0x918c1e89a94f2794df83fec63d9558a8836e06c7a3ba2e0be918a6b103091db7",
"0x315b9d399a9245a7a6e962e2a190cf91a7e9edccab26ada00deb18e24cce48bb",
"0x43d66cad2705c3bb002d1ceb8a8837a08e8339c30a1b21cddb30aa68351fda5b",
"0x78f46b8e3c6170381de633e792cb0531e138ca62d061415189fe87e36bffd4a2",
"0xfcd47f4fedcf55ebdbbbf57e8373f9cd5473a18182e7815345361230e9c6857d",
"0x735a49e27de055b60725cff32beb0fc1f7ed6398cb90c139adc7d8dceb9f5775",
"0x8e8cd4f1532c3380f52a1b5f7730012208fc2fddd47ea4c4a8f1a9150efaca29",
"0x9d285625369856d352f08eda8ea7941ddba3228218520238c17ac49b2ce40e67",
"0x22176302d7a37431a2991f47d5c0e8914f06490411894c2b186c678d03d4b4ce"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

