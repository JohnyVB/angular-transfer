export class User{
    constructor(
        public _id: string,
        public firstName: string,
        public lastName: string,
        public typeDocument: string,
        public document: number,
        public dateBirth: string,
        public countryBirth: string,
        public cityBirth: string,
        public expeditionDate: string,
        public gender: string,
        public email: string,
        public rol: string,
        public cashBox: [],
        public state: boolean
    ){}
}