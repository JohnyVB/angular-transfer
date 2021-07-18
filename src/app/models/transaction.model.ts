export class Transaction{
    constructor(
        public _id: string,
        public to: any,
        public from: any,
        public value: number,
        public currency: string,
        public delivered: boolean,
        public deliveredIn: any,
        public deliveredOut: any
    ){}
}