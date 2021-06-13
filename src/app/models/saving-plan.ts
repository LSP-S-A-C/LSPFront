import { CurrencyPipe } from "@angular/common";
import {Info} from "./goal-info.model"

export class SavingPlanContainer {
    public ok: string;
    public message: string;
    public body: SavingPlans[];
}

export class SavingPlans {
    id:number;
    currency: string;
    currentMoney: number;
    currentSaves: number;
    savesPercent: number;
    savesgoals: Info[];

    constructor(currency: string, currentMoney: number, currentSaves: number, savesPercent: number, savesgoals: Info[], id: number) {
        this.currency = currency;
        this.currentMoney = currentMoney;
        this.currentSaves = currentSaves;
        this.savesPercent = savesPercent;
        this.id = id;
        this.savesgoals = savesgoals;
    }
}