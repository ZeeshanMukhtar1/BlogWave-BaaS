// Importing the Appwrite configuration from the centralized configuration file
import conf from '../../conf/conf.js';

// Importing the required Appwrite components
import { Client, Databases, ID, Storage, Query } from 'appwrite';

export class Service {
  client = new Client();
  Databases;
  bucket;

  constructor() {
    // Setting the Appwrite client properties such as endpoint and project ID
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    // Initializing Appwrite Databases and Storage objects
    this.Databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Creating a post by adding its details to the Appwrite Database
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.Databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  // Updating an existing post in the Appwrite Database
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.Databases.updateDocument(
        conf.appWriteCollectionId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      log(error);
    }
  }

  // Deleting a post from the Appwrite Database
  async deletePost(slug) {
    try {
      await this.Databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Fetching details of a specific post from the Appwrite Database
  async getPost(slug) {
    try {
      return await this.Databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Fetching a list of posts based on specified queries from the Appwrite Database
  async getPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.Databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // File upload services

  // Uploading a file to the Appwrite Storage
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Deleting a file from the Appwrite Storage
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Fetching a preview of a file from the Appwrite Storage
  async getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

// Creating a single instance of the Service class to be exported for use throughout the application
const service = new Service();

// Exporting the instantiated Service class for use in other parts of the application
export default service;
