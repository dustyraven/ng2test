let nextId = 1;

export class Contact {
    public id: number;

    constructor(
            public gender: number,
            public name: string,
            public family: string,
            public email: string,
            public phone: string,
            public address: string
        ) {
        this.id = nextId++;
    }
}
