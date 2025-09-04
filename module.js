// core module, local module, third-party module

// core module:- http, fs, os, path, buffer, url, event
// local module:- user-define
// third-party:- npm

const addition = (a, b) => {
    return a + b;
}

// cjs => named export / default export
// module.exports = addition;

// ESM
export default addition