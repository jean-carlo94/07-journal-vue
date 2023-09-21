export interface Entry{
    id?      : string;
    date     : string;
    text     : string;
    picture? : string | null;
}

export interface State{
    isLoading: boolean;
    entries:   Entry[];
}

export default (): State => (
    {
        isLoading: false,
        entries: []
    }
)