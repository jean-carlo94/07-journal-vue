export interface Entry{
    id      : number;
    date    : string;
    text    : string;
    picture : string | null;
}

export interface State{
    isLoading: boolean;
    entries:   Entry[];
}

export default (): State => (
    {
        isLoading: true,
        entries: [
            {
                id: new Date().getTime(),
                date: new Date().toDateString(),
                text: 'Minim fugiat deserunt duis sunt consequat ad sit ea consectetur. Minim fugiat deserunt duis sunt consequat ad sit ea consectetur.',
                picture: null, //URL
            },
            {
                id: new Date().getTime() + 100 ,
                date: new Date().toDateString(),
                text: 'Tempor anim eu minim dolor est ea in deserunt adipisicing Lorem ullamco esse nostrud. Tempor anim eu minim dolor est ea in deserunt adipisicing Lorem ullamco esse nostrud.',
                picture: null, //URL
            },
            {
                id: new Date().getTime() + 1000 ,
                date: new Date().toDateString(),
                text: 'Tempor excepteur minim proident commodo ad irure officia duis eu aute. Tempor anim eu minim dolor est ea in deserunt adipisicing Lorem ullamco esse nostrud.',
                picture: null, //URL
            },
        ]
    }
)