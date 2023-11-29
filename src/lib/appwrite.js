import { Account, Client } from "appwrite";

const appwriteClient = new Client();

appwriteClient
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655856447e2885bfa048");

export const account = new Account(appwriteClient);

export { ID } from "appwrite";
