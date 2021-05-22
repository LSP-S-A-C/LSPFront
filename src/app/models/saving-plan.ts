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
