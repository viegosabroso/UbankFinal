import { app } from "../Clients/firebase";
import { collection,getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export const DataBaseService = () => {

const getdb = async () =>{
    const getquestions = await getDocs(collection(db, "Questions"));
    const questions = getquestions.docs.map((doc) =>{

        return({...doc.data() })
    });
    
    
    return questions


}

return {
    getdb
}
}