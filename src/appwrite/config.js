 import conf from '../conf/conf';

import {Client, ID, Databases, Query, Storage} from "appwrite"

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,city, description, location, gallery, status,userId,bedroom,bathroom,price, contactNo,
        disabledAccess,parking,elevator,washingMachine,dishwasher,dateAvailable
     }){
        try{
            console.log(title)
            const res=await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    city,
                    location,
                    description,
                    gallery,
                    status,
                    bedroom:Number(bedroom),
                    bathroom:Number(bathroom),
                    price:Number(price),
                    contactNo,
                    disabledAccess,parking,elevator,washingMachine,dishwasher,
                    dateAvailable,
                    userId,
                    
                }
            )
            // console.log(res);
            return res
        }
        catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug,{title,city, description, location, gallery, status,bedroom, bathroom, price,contactNo,disabledAccess,parking,elevator,washingMachine,dishwasher,
        dateAvailable
    }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    city,
                    location,
                    description,
                    gallery, 
                    status,
                    bedroom:Number(bedroom),
                    bathroom:Number(bathroom),
                    price:Number(price),
                    contactNo,
                    disabledAccess,parking,elevator,washingMachine,dishwasher,
                    dateAvailable
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }

    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    

    // file upload services

    async uplaodFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            ) 
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    getFileView(fileId){
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }

    // async updateSearchCount(searchTerm,space){
    //     try {
    //         const result = await this.databases.listDocuments(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             [Query.equal('searchTerm',searchTerm)]
    //         )

    //         if(result.documents.length>0)
    //         {
    //             console.log(result.documents[0]);
    //             await this.databases.updateDocument()
    //         }

    //     } catch (error) {

    //     }
    // }

    //search functionality

    async searchSpace(data){
        try {
            const response= await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.search('description',data.search),
                    // Query.equal('dateAvailable',data.dateInput)
                ]
            )
            console.log(response.documents);
            // const filteredData = response.documents?.filter((doc) =>
            // doc.description?.toLowerCase().includes(searchTerm.search.toLowerCase())
            // )
            return response.documents;
            
        } catch (error) {
            console.log("Appwrite serive :: searchSpace :: error", error);
        }
    }


    async filterSpace(data){
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal("parking",true),
                 Query.equal("disabledAccess",true),
                 Query.equal("elevator",true),
                 Query.equal("washingMachine",true),
                 Query.equal("dishwasher",true),
                //  Query.equal("bedroom",data.bedroom),
                //  Query.equal("bathroom",data.bathroom)
                ]
                
            )
            console.log(response);
            return response.documents
        } catch (error) {
             console.log("Appwrite serive :: filterSpace :: error", error);
        }
    }

    // async createCustomer(){
    //     try {
    //         const res = await this.databases.createDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCustomerCollectionId,
                
    //         )
    //     } catch (error) {
            
    //     }   
    // }

}


const service = new Service()


export default service