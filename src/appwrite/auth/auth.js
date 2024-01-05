// Importing the Appwrite configuration from the centralized configuration file
import conf from '../../conf/conf.js';

// Importing the required Appwrite components
import { Client, Account, ID } from 'appwrite';

// Creating a class for the AuthService to manage authentication-related functionalities
export class AuthService {
  // Initializing an instance of the Appwrite Client and an Account object
  client = new Client();
  account;

  // Constructor to set up the Appwrite client with the provided configuration
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl) // Setting the Appwrite API endpoint
      .setProject(conf.appWriteProjectId); // Setting the Appwrite Project ID
    this.account = new Account(this.client); // Initializing an Account object
  }

  // Method to create a new user account with the provided email, password, and name
  async createAccount({ email, password, name }) {
    try {
      // Creating a new user account using the Appwrite Account API
      const userAccount = await this.account.create(
        ID.unique(), // Generate a unique user ID
        email, // User's email
        password, // User's password
        name // User's name
      );

      // If the user account is created successfully, automatically log in the user
      if (userAccount) {
        // Call the login method to initiate a session for the newly created user
        return this.login({ email, password });
      } else {
        // Return the user account object (or null) if account creation fails
        return userAccount;
      }
    } catch (error) {
      // If an error occurs during account creation, throw the error for handling
      throw error;
    }
  }

  // Method to log in an existing user with the provided email and password
  async login({ email, password }) {
    try {
      // Log in the user by creating an email session using the Appwrite Account API
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      // If an error occurs during login, throw the error for handling
      throw error;
    }
  }

  // Method to fetch details of the currently logged-in user
  async getCurrentUser() {
    try {
      // Retrieving details of the currently logged-in user using the Appwrite Account API
      return await this.account.get();
    } catch (error) {
      // If an error occurs while fetching user details, throw the error for handling
      throw error;
    }

    // Returning null if an error occurs (although it is unreachable due to the preceding catch block)
    return null;
  }

  // Method to log out the currently authenticated user
  async logout() {
    try {
      // Deleting all sessions to log out the currently authenticated user
      return await this.account.deleteSessions();
    } catch (error) {
      // If an error occurs during logout, throw the error for handling
      throw error;
    }
  }
}

// Creating a single instance of the AuthService to be exported for use throughout the application
const authService = new AuthService();

// Exporting the instantiated AuthService for use in other parts of the application
export default authService;
