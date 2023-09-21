import type { State } from "./state";

export const getEntriesByTerm = ( state: State ) => ( term = '' ) => {
    if( term.length === 0 ) return state.entries;

    return state.entries.filter( (entry) => entry.text.toLowerCase().includes( term.toLowerCase() ) );
}

export const getEntriesById = ( state: State ) => ( id = '' ) => {
    const entry = state.entries.find( (entry) => entry.id === id );
    if( !entry ) return;
    
    return {...entry};
}