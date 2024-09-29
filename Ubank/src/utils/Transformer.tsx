import { DataBaseService } from "../Services/addingdatabase";


const {getdb} = DataBaseService();

export const transformData = async ()=> {
    const db = await getdb();
    console.log(db);
    const transformactivated = db[0]
    console.log(transformactivated);
    return transformactivated;
    
}

    
    