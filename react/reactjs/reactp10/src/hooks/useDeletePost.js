import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase/config";

export const useDeletePost = (docCollection) => {

    const deletePost = async (postId) => {
        try {
            const documentToDelete = await deleteDoc(doc(db, docCollection, postId));
        } catch (error) {
            console.log(error)
        }
    }
    return { deletePost };
}