import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
   return async (dispatch, getState) => {

      const { uid } = getState().auth;
      const newNote = {
         title: '',
         body: '',
         date: new Date().getTime()
      }

      const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

      dispatch(activeNote(docRef.id, newNote));
      dispatch(addNewNote(docRef.id, newNote));
   }
}

export const activeNote = (id, note) => ({
   type: types.notesActive,
   payload: {
      id,
      ...note
   }
});
export const addNewNote = (id, note) => ({
   type: types.notesAddNew,
   payload: {
      id,
      ...note
   }
});


export const startLoadNotes = (uid) => {
   return async (dispatch) => {
      const notes = await loadNotes(uid);
      dispatch(setNotes(notes));
   }
}
export const setNotes = (notes) => ({
   type: types.notesLoad,
   payload: notes
});

export const startSaveNote = (note) => {
   return async (dispatch, getState) => {
      const { uid } = getState().auth;

      if (!note.url) {
         delete note.url;
      }
      const noteToFirestore = { ...note };
      delete noteToFirestore.id;
      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
      dispatch(refreshNotes(note.id, note))
      Swal.fire('Saved', note.title, 'success');
   }
}

export const refreshNotes = (id, note) => ({
   type: types.notesUpdated,
   payload: {
      id,
      note: {
         id,
         ...note
      }
   }
})

export const startUploading = (file) => {
   return async (dispatch, getState) => {
      const { active: activeNote } = getState().notes;
      Swal.fire({
         title: 'Uploading...',
         text: 'Please wait..',
         allowOutsideClick: false,
         showConfirmButton: false,
         willOpen: () => {
            Swal.showLoading();
         }
      });
      const fileUrl = await fileUpload(file);
      activeNote.url = fileUrl;
      Swal.close();
      dispatch(startSaveNote(activeNote));
   }
}

export const startDeleting = (id) => {
   return async (dispatch, getState) => {
      const uid = getState().auth.uid;
      await db.doc(`${uid}/journal/notes/${id}`).delete();
      dispatch(deleteNote(id));
   }
}

export const deleteNote = (id) => ({
   type: types.notesDeleted,
   payload: id
})

export const startLogout = () => ({
   type: types.notesLogoutCleaning
})