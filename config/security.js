module.exports.security = {

   cors: {
     allRoutes: true,
     allowOrigins: ['http://localhost:4200'],
     allowRequestMethods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
     allowRequestHeaders: 'content-type, Authorization'
   },

  // csrf: false

};
