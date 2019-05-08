import Transaction from "./Transaction";
// @ts-ignore
import QRCode from 'qrcode';
import $ from 'jquery';
import BilpayConfig from "./Type/BilpayConfig";
import AuthResponse from "./Type/AuthResponse";
import modal from "./modal";


export default class Bilpay {
    static readonly endpoint = "https://stellar.altugankarali.com/api/merchant/authorize";
    private readonly shopName: string;
    private readonly pubKey: string;
    static timeOut: number;

    constructor(config: BilpayConfig) {
        this.shopName = config.shopName;
        this.pubKey = config.pubKey;
        Bilpay.timeOut = config.timeOut;
    }

    private async requestAuthorization(amount: number, info: string) {

        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(Bilpay.endpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        merchant_public_key: this.pubKey,
                        shop_name: this.shopName,
                        additional_info: info,
                        amount: amount
                    })
                });

                if (Number(response.headers.get('status')) == 404) {
                    reject('Error');
                }

                const body: AuthResponse = await response.json();
                resolve(body);
            } catch (e) {
                reject(e);
            }
        });

    }

    private async fetchQRPayload(amount: number, info: string) {
        try {
            const payload = <AuthResponse>await this.requestAuthorization(amount, info);

            const canvas = $('#canvas', modal)[0];
            modal.show();
            (<any>modal).loading();
            // @ts-ignore
            payload.id = String(payload.id);
            payload.amount = String(payload.amount);
            console.log(payload);
            // @ts-ignore
            QRCode.toCanvas(canvas,JSON.stringify(payload) , error => {
                (<any>modal).hideQR();
                if (error) {
                    (<any>modal).fail(error.toString());
                } else {
                    console.log('success!');
                    setTimeout(() => {
                        (<any>modal).showQR();
                    }, 800)

                }
            });
            return payload;
        } catch (e) {
            (<any>modal).fail(e.toString());
        }


    }

    async createTransaction(amount: number, info: string) {
        const payload = <AuthResponse>await this.fetchQRPayload(amount, info);
        if (payload) {
            return new Transaction(Number(payload.id));
        } else {
            throw new Error("Something bad happened");
        }

    }
}

