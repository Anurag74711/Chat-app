import {StreamChat} from "stream-chat"
import dotenv from "dotenv/config"

const api_key=process.env.STREAM_API_KEY;
const api_secret=process.env.STREAM_API_SECRET;
 if(!api_key || !api_secret){
    console.error("Stream API key or secret not found");
 }
 
 const streamClient=StreamChat.getInstance(api_key,api_secret);

 export const upsertStreamUser=async(userData)=>{
    try {
        await streamClient.upsertUsers([userData])
        return userData

    } catch (error) {
        console.error("Error upserting stream user",error)
    }
 }

 export const generateStreamToken=(userId)=>{   
    try {
        const userIdStr=userId.toString();
        return streamClient.createToken(userIdStr);
       
    } catch (error) {
        console.error("Error generating stream token",error)
    }
   
 }