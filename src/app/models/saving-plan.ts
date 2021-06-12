import { CurrencyPipe } from "@angular/common";

export class SavingPlan {
    currency: string;
    currentAmount: number;
    expectedSavingsRatio: number;

    constructor() {
    }
}

export class SavingPlanContainer {
    public ok: string;
    public message: string;
    public body: SavingPlan[];
}

export class SavingPlans {
    currency: string;
    currentMoney: number;
    currentSaves: number;
    savesPercent: number;

    constructor(currency: string, currentMoney: number, currentSaves: number, savesPercent: number) {
        this.currency = currency;
        this.currentMoney = currentMoney;
        this.currentSaves = currentSaves;
        this.savesPercent = savesPercent;
    }
}