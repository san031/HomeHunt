const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteProjectId :  String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteCustomerCollectionId:String(import.meta.env.VITE_APPWRITE_CUSTOMER_COLLECTION_ID),
    googlemapapikey:(import.meta.env.VITE_GOOGLE_MAP_API_KEY)
}

export default conf 