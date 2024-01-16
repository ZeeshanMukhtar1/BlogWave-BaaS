// imports
import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

//  creating a class for auth service
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //    creating a method for signup account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      //    creating an account and signing in the user
      if (userAccount) {
        // calling another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      // handling an error casually
      throw error;
    }
  }

  // loggin in the user
  async login({ email, password }) {
    try {
      // iut will create a session for the user
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // getting the current user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite serive :: getCurrentUser :: error', error);
    }

    return null;
  }

  // logging out the user
  async logout() {
    try {
      // deleting all the sessions which are logged in
      await this.account.deleteSessions();
    } catch (error) {
      console.log('Appwrite serive :: logout :: error', error);
    }
  }
}

const authService = new AuthService();

export default authService;
