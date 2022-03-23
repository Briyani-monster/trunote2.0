import { createContext, useState } from "react";
import usePersistedState from "../StatePresisting/usePersistedState";
export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [notes, setNotes] = usePersistedState("notes", []);
  const [archeiveNotes, setArcheiveNotes] = usePersistedState("archive", []);
  const [deleteNotes, setDeleteNotes] = usePersistedState("delete", []);
  const [pinnedNotes, setPinnedNotes] = usePersistedState("pinned", []);
  const [showEditmodal, setShowEditmodal] = usePersistedState(
    "showEditmodal",
    false
  );
  const [editNote, setEditNote] = usePersistedState("editNote", {
    text: "",
    heading: "",
  });
  const [editType, setEditType] = usePersistedState("editType", "notes");

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archeiveNotes,
        setArcheiveNotes,
        deleteNotes,
        setDeleteNotes,
        pinnedNotes,
        setPinnedNotes,
        showEditmodal,
        setShowEditmodal,
        editNote,
        setEditNote,
        editType,
        setEditType,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
