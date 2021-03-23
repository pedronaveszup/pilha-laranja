'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
        method: 'GET',
        path: '/',
        handler: (request, h) => {
          return [
            {
              "url": "http://localhost:3002/remoteEntry.js",
              "scope": "foundation",
              "module": "./App",
              "id": 1
            },
            {
              "url": "http://localhost:3002/remoteEntry.js",
              "scope": "foundation",
              "module": "./Card",
              "id": 2
            },
            {
              "url": "http://localhost:3003/remoteEntry.js",
              "scope": "pipes",
              "module": "./Component",
              "id": 3
            },
          ]
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();