import { DataBaseService } from "../Services/addingdatabase";


const {getdb} = DataBaseService();

export const transformData = async ()=> {
    try{

        const db = await getdb();
        console.log(db);
        const transformactivated = db[0]
        const arraytransform = Object.values(transformactivated)
        console.log(arraytransform)
        return arraytransform  || [];
    }catch(error){ 
        console.log(error);
    }
    
}

    
    