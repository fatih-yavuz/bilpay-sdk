export default class Transaction {
    private status;
    private id;
    constructor(id: number);
    onPayment(parameters: {
        success: any;
        fail: any;
    }): void;
}
