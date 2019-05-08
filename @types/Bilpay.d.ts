import Transaction from "./Transaction";
import BilpayConfig from "./Type/BilpayConfig";
export default class Bilpay {
    static readonly endpoint = "https://stellar.altugankarali.com/api/merchant/authorize";
    private readonly shopName;
    private readonly pubKey;
    static timeOut: number;
    constructor(config: BilpayConfig);
    private requestAuthorization;
    private fetchQRPayload;
    createTransaction(amount: number, info: string): Promise<Transaction>;
}
