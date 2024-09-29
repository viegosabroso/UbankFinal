import { app } from "../Clients/firebase";
import {getStorage,ref,getDownloadURL} from "firebase/storage";

 const storage = getStorage(app);

 const storageRef = ref(storage, "Images/");

export const getimg = async (img:string) => {
    try {
    const imgRef = ref(storageRef, img);
  const url = await getDownloadURL(imgRef);
  return url;
    } catch (error) {
      console.log(error);
    }
  }



