require("dotenv").config();
const tenant = process.env.AZURE_TENANT;
const client = process.env.AZURE_CLIENT_ID;

const config = {
  identityMetadata: `https://login.microsoftonline.com/${tenant}/v2.0/.well-known/openid-configuration`,
  clientID: `${client}`,
  validateIssuer: false,
  loggingLevel: 'info',
  passReqToCallback: false,
  loggingNoPII: false,
  audience: `${client}`
};

module.exports = config;