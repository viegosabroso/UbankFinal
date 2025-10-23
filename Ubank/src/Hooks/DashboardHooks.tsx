
import  {  useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../Clients/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UseContextIncomes } from "./Usecontext";

const UseDashboard = () => {   

    const {incomesdata} = UseContextIncomes();

    const [username, setUsername] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false); 
    const navigate = useNavigate();
  
    useEffect(() => {
      console.log(incomesdata);
      
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        setLoading(true); 
        if (user) {
          
          try {
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
              setUsername(userDoc.data()?.username || "");
              
            }
          } catch (error) {
            console.error("Error al obtener los datos del usuario: ", error);
            toast.error("Error al obtener los datos del usuario.");
          } finally {
            setLoading(false); 
          }
        } else {
          
          setLoading(false); 
          if (!isLoggingOut) { 
            toast.error("Debe iniciar sesión para acceder al dashboard.");
          }
          navigate("/login");
        }
      });
  
      return () => unsubscribe(); 
    }, [navigate, isLoggingOut,incomesdata]);
  
    
    const handleLogout = async () => {
      setIsLoggingOut(true); 
      try {
        await signOut(auth);
        toast.success("Finalizó su sesión exitosamente.");
        navigate("/login");
      } catch (error) {
        console.error("Error al cerrar sesión: ", error);
        toast.error("Error al cerrar sesión.");
      } finally {
        setIsLoggingOut(false);
      }
    };
  
    if (loading) {
      return <div>Loading...</div>; 
    }


    return {username, handleLogout};
}  

export default UseDashboard;