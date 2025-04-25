import { createContext, useReducer } from "react";

const NotesContext = createContext();

const initialState = {
    groups: localStorage.getItem("groups") ? JSON.parse(localStorage.getItem("groups")) : [],
    selectedGroup: null,
    isCreating: false,
}

const notesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_GROUP":
            localStorage.setItem("groups", JSON.stringify([...state.groups, action.payload]));
            return {
                ...state,
                groups: [...state.groups, action.payload],
            };
        case "SELECT_GROUP":
            return {
                ...state,
                selectedGroup: action.payload,
            };
        case "TOGGLE_CREATING":
            return {
                ...state,
                isCreating: !state.isCreating,
            };
        case "ADD_NOTE":
            localStorage.setItem("groups", JSON.stringify(state.groups.map(group => {
                if (group.id === action.payload.groupId) {
                    group.notes.push(action.payload.note);
                }
                return group;
            })));
        default:
            return state;
    }
}

const NotesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notesReducer, initialState);

    return (
        <NotesContext.Provider value={{ state, dispatch }}>
            {children}
        </NotesContext.Provider>
    );
};

export { NotesContext, NotesProvider };