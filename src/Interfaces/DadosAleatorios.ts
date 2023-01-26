export interface IDadosAleatorios {
    id: number;
    name: {
        first: string;
        last: string;
    };
    picture: {
        large: string;
    };
    email: string;
    location: {
        street: {
            name: string;
            number: string | number;
        };
    };
}
