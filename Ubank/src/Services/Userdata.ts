import { getDoc, doc, collection,updateDoc } from "firebase/firestore";
import { auth, db } from "../Clients/firebase"; 
import { onAuthStateChanged } from "firebase/auth";

export const getUserData = async () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userdataRef = doc(db, "users", user.uid);
                    const userdataDoc = await getDoc(userdataRef);
                    if (!userdataDoc.exists()) {
                        console.error("User data not found");
                        resolve(null); // Or handle the case when the user data does not exist
                    }

                    const userdata = userdataDoc.data();
                    console.log(userdata);
                    resolve(userdata);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    reject(error);
                }
            } else {
                console.error("User not logged in");
            }
        });
    });
};

export const updateUserData = async (updatedFields: any) => {
    try {
        const userdataRef = doc(db, "users", auth.currentUser!.uid);
        const userDoc = await getDoc(userdataRef);

        if (userDoc.exists()) {
            const currentData = userDoc.data(); // Type assertion
            const newData = {
                ...currentData,
                ...updatedFields, 
            };
            await updateDoc(userdataRef, newData);
            console.log("User data updated successfully");
        } else {
            console.error("No such document!");
        }
    } catch (error) {
        console.error("Error updating user data:", error);
    }
};
        