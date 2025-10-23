import { app } from "../Clients/firebase";
import { collection,getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export const DataBaseServiceplan = () => {

const getdbPlans = async () =>{
    const getdbPlans = await getDocs(collection(db, "Plans"));
    const plans:any = [];
    getdbPlans.forEach((doc) => {
        plans.push({...doc.data(), id: doc.id });
    });
    
   
    
    
    return plans


}

return {
    getdbPlans
}
}