module.exports.models = {
  // schema: true,
   migrate: 'alter',
  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
    id: { type: 'number', autoIncrement: true, },
  },
  dataEncryptionKeys: {
    default: 'ShBCRfSeYu7LGr3vW7EFDIv2gO3/6vuTwtPv0ryPPuA='
  },
  cascadeOnDestroy: true


};
