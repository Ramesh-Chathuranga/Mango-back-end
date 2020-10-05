import firebase from "../firebase"

export default class Repository {
    collection:any;
   constructor(collection:any){this.collection=collection}

   getAll = async()=>{
     
        const data =await firebase.firestore().collection(this.collection).get();
        console.info(data);
        const newList:any = []
        data.forEach(doc =>  newList.push({...doc.data(),id:doc.id}));
        return newList;
     
   };

   getData = async(id:string)=>{
    
        const data = await firebase.firestore().collection(this.collection).doc(id).get();
        console.log(this.collection," get a data ",data);
        return data;
     
   };

   updateData = async (object:any,id:string) =>{
      return await firebase.firestore().collection(this.collection).doc(id).set(object);
    
   };

   createDocument = async (object:any)=>{
    
      return await firebase.firestore().collection(this.collection).add(object);
   }

   findDocument =async (tag:string, value:string)=>{
     const data= await firebase.firestore().collection(this.collection).where(tag, "==", value).get();
       const newList:any = []
        data.forEach(doc =>  newList.push({...doc.data(),id:doc.id}));
        return newList;
   };

   deleteDocument = async(id:string)=>{
     return await firebase.firestore().collection(this.collection).doc(id).delete();
   }
    
   
}