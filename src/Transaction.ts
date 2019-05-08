import Bilpay from './Bilpay';
import modal from "./modal";

enum TransactionStatus {
    PENDING,
    SUCCESS,
    FAILED,
};

export default class Transaction {

    private status: TransactionStatus;
    private id: number;

    constructor(id: number) {
        this.status = TransactionStatus.PENDING;
        this.id = id;
    }


    onPayment(parameters: { success: any, fail: any }) {
        let {success, fail} = parameters;
        setTimeout(() => {
            if (this.status != TransactionStatus.SUCCESS) {
                clearInterval(i);
                this.status = TransactionStatus.FAILED;
                (<any>modal).fail("QR Timeout");
                if ((<any>modal).isOpen) {
                    fail();
                }

            }
        }, Bilpay.timeOut);

        const i = setInterval(async () => {
            try {
                const response = await fetch(`${Bilpay.endpoint}/${this.id}`, {
                    method: "GET"
                });
                const result = await response.json();

                if (result.status == "received") {
                    clearInterval(i);
                    (<any>modal).success();
                    this.status = TransactionStatus.SUCCESS;
                    success();

                }
            } catch (e) {
                (<any>modal).fail(e.toString());
            }
        }, 2000);

    }
}