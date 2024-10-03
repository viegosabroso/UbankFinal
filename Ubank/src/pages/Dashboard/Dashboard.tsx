import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Clients/firebase";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import './Dashboard.css'

const Dashboard: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); 
  const navigate = useNavigate();
  const auth = getAuth(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
         
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUsername(userDoc.data()?.username || "");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
          toast.error("Error fetching user data.");
        } finally {
          setLoading(false); 
        }
      } else {
        
        toast.success("Finalizó su sesión exitosamente");
        navigate("/"); 
      }
    });

    return () => unsubscribe(); 
  }, [auth, navigate]); 

 
  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigate("/"); 
    } catch (error) {
      console.error("Error logging out: ", error);
      toast.error("Error logging out.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h2
      className="welcome-user">
        Welcome, {username} 🌷͙֒🎀
      </h2>
      <button 
      className="log-out-button"
      onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

