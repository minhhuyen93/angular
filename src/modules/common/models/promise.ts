import guidHelper from "../helpers/guidHelper";
import { PromiseStatus } from "./enums";
export class PromiseFactory {
    public static create(): Promise {
        return new Promise();
    }
}
export class Promise {
    private queue: Array<string> = [];
    private id: string;
    private status: PromiseStatus;
    private subscribeCallBack: any;
    public data: any;
    public errors: Array<any>;
    private successCallBack: any;
    private failCallBack: any;
    constructor() {
        this.id = guidHelper.create();
    }
    public resolveAll(subPromise: Promise): Promise {
        let self = this;
        self.queue.push(subPromise.id);
        subPromise.subscribe((sub: Promise) => {
            self.checkComplete(sub);
        });
        return self;
    }
    public subscribe(callBack: any): Promise {
        this.status = PromiseStatus.Subscribe;
        this.subscribeCallBack = callBack;
        return this;
    }
    public resolve(data?: any): Promise {
        this.data = data;
        this.status = this.status != PromiseStatus.Subscribe ? PromiseStatus.Success : this.status;
        this.processCallBack();
        return this;
    }
    public then(callBack: any): Promise {
        this.successCallBack = callBack;
        this.processCallBack();
        return this;
    }
    public reject(errors?: Array<any>): Promise {
        this.errors = errors;
        this.status = PromiseStatus.Failed;
        this.processCallBack();
        return this;
    }
    private checkComplete(subPro: Promise): void {
        this.queue = this.queue.removeItem(subPro.id);
        if (this.queue.isEmpty()) {
            this.status = PromiseStatus.Success;
            this.processCallBack();
        }
    }
    private processCallBack(): void {
        if (this.status == PromiseStatus.Subscribe && !!this.subscribeCallBack) {
            this.subscribeCallBack(this);
            return;
        }
        if (this.status == PromiseStatus.Success && !!this.successCallBack) {
            this.successCallBack(this.data);
            return;
        }
        if (this.status == PromiseStatus.Failed && !!this.failCallBack) {
            this.failCallBack(this.errors);
            return;
        }
    }
}