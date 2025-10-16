import conf from '../conf/conf.js';

import {Client,
    Account,
ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name,
        // phone`
    }){try{
           const userAccount = await this.account.create(ID.unique(), email, password,name,
        //    phone
        )
        alert('Account created successfully! Please check your email for verification.');
        console.log(userAccount);
         if(userAccount){
            // call another method
            return this.login({email,password});
            }
        else
            return userAccount;
    }
    catch(error){
    console.log("Appwrite sercvice:: getCurrentUser::error",error);
}}

    async login({email, password}) {

            return await this.account.createEmailPasswordSession(email, password);
    
    }

    async getCurrentUser(){
    try{
        return await this.account.get()

    }
    catch(error){
        console.log("Appwrite sercvice:: getCurrentUser::error", error);
    }
    return null;
    
}


async logout(){
    try{
        await this.account.deleteSessions();
    }
    catch(error){
        console.log(error);
    }
}
}



const authService = new AuthService()


export default authService