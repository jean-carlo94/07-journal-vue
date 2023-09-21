import type { ActionContext } from "vuex";

import type { Entry, State } from "./state";
import journalApi from "@/api/journalApi";


export const loadEntries = async ({ commit } : ActionContext<State, State>) => {
    commit('setLoading');

    try {
        const { data } = await journalApi.get('/entries.json');
        const entries = [];
    
        for (const id of Object.keys(data)) {
            entries.push({
                id,
                ...data[id]
            })    
        };

        commit('setEntries', entries);

    } catch (error) {
        commit('setLoading');
    }
}

export const createEntry = async ({ commit } : ActionContext<State, State>, entry:Entry):Promise<Entry | undefined> => {
    commit('setLoading');

    try {
        const { data } = await journalApi.post<{ name: string }>(`/entries.json`, {...entry});        
        const newEntry = {
            id: data.name,
            ...entry,
        };        
        commit('createEntry', newEntry);

        return newEntry;
     } catch (error) {
        commit('setLoading');
     }
}

export const updateEntry = async ({ commit } : ActionContext<State, State>, entry:Entry ) => {
     
    commit('setLoading');

    try {
        const { picture, text} = entry
        const dataToSave = { 
                date: new Date().toDateString(),
                text,
                picture
        };

        const { data } = await journalApi.patch<Entry>(`/entries/${entry.id}.json`, dataToSave);

        commit('updateEntries', { 
            id:entry.id,
            ...data,
        });
      
     } catch (error) {
         commit('setLoading');
     }
}

export const deleteEntry = async ({ commit } : ActionContext<State, State>, entryId:string): Promise<boolean> => {    
    commit('setLoading');

    try {
        await journalApi.delete<{ name: string }>(`/entries/${entryId}.json`);               
        commit('deleteEntry', entryId);

        return true;
     } catch (error) {
        commit('setLoading');
        return false;
     }
}
