export interface Company {
    name: string;
    catchphrase: string;
    bs: string;
}

export interface Location {
    lat: string;
    lng: string;
}

export interface Adress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Location;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    adress: Adress;
    phone: string;
    website: string;
    company: Company;
}
