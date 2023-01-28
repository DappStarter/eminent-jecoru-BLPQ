require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth praise property hunt neck equal gentle'; 
let testAccounts = [
"0xd0b05192ddda10c8cb3a4d659d408d407596989997c1f9ba1e96316a92b8eb4d",
"0xa972c277b3f6ac179e4422bdf21dd5e7620e7c4d6c3ac5eb43c7edf3e7fb2ab9",
"0xa3df6327f9d79fd799a8678d8b3cbf020f6965ceed93513f685f0b978ecac6ec",
"0xbf03bbe531a43cae061786da76398aa96b00e6c107b1ce0e845c413d4912b54f",
"0x765e63cb186fe0ace3b810f101cad8cef9d63fc19243eea9247f198416d36cd2",
"0x93e46d2e189f824eea7aa5735edf69935a694da4f6ca8a8d43487d3b9282a8aa",
"0xc61301f78eea9f62fac34306808c19e5ee0fdea060f196860d7df468c8869a1b",
"0xdb394a266126d5022e152ff8a383c7e67023c0f0ed801e3fe26d923a9b7271b3",
"0x1c52dbeaac2b9d9626b0352e38b89dc6d5f77e5162073d4bac961c16df6cdca6",
"0x450ffab692107f89f2d489f8275b2d0d6fb1235ff70f850276cf8195c1bc3616"
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

