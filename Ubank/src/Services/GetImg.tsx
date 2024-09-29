import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {app} from "../Clients/firebase";

const storage = getStorage(app);

export const geturl = async () => {

    try {
        const Imgsref = ref(storage, "Images/");

    } catch (error) {
        console.log(error)
    };

}

export const listImages = async () => {
    // Obtén la referencia a la carpeta 'images'
    const imagesRef = ref(storage, 'Images/');
  
    try {
      // Lista todos los objetos en la carpeta
      const result = await listAll(imagesRef);
  
      // Obtén las URLs de descarga de cada imagen
      const urls = await Promise.all(
        result.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        })
      );
      console.log(urls);
    } catch (error) {
      console.error("Error al listar o descargar las imágenes:", error);
    }
  };