// conf/conf.js

// Ensure that the environment variables are of the correct type (string) and not undefined.

const conf = {
  // Appwrite API URL
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),

  // Appwrite Project ID
  appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

  // Appwrite Database ID
  appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

  // Appwrite Collection ID
  appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

  // Appwrite Bucket ID
  appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
