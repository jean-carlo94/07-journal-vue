import type { Entry, State } from "./state";

export const setLoading = ( state:State, ) => {
    state.isLoading = !state.isLoading;
}

export const setEntries = ( state:State, entries: Entry[] ) => {
    state.entries = [ ...state.entries, ...entries];
    state.isLoading = !state.isLoading;
}

export const createEntry = ( state:State, entry: Entry ) => {    
    state.entries = [ entry, ...state.entries,];
    state.isLoading = !state.isLoading;
}

export const updateEntries = ( state:State, entry: Entry ) => {
    const index = state.entries.map( e => e.id ).indexOf( entry.id );
    state.entries[index] = entry;
    state.isLoading = !state.isLoading;
}

export const deleteEntry = ( state:State, entryId: string ) => {    
    state.entries = state.entries.filter( (entry) => entry.id !== entryId );
    state.isLoading = !state.isLoading;
}