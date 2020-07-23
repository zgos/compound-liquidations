module.exports = {

    migrations_directory: "./sol/migrations",
    contracts_build_directory: "./sol/build",
    contracts_directory: "./sol/contracts",

    networks: {
        development: {
            host: "127.0.0.1",
            port: 14603,
            network_id: "*",
            gas: '6721975',
            gasPrice: '20000000000',
            websockets: true
        },
    },

    compilers: {
        solc: {
            version: "0.6.11"
        }
    }
}
