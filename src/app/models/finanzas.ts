export class SavingSheetsContainer {
    public ok: string;
    public message: string;
    public body: SavingSheets[];
}

export class SavingSheets {
    id:number;
    idSavingPlan: string;
    period: number;
    startDate: string;
    endDate: string;
    savingSheetsName: string;
    active: boolean;
    categories: Category[];

    constructor(id:number, idSavingPlan: string, period: number, startDate: string, endDate: string, savingSheetsName: string, active: boolean, categories: Category[]) {
        this.id = id;
        this.idSavingPlan = idSavingPlan;
        this.period = period;
        this.startDate = startDate;
        this.endDate = endDate;
        this.savingSheetsName = savingSheetsName;
        this.active = active;
        this.categories = categories;
    }
}

export class CategoriesContainer {
    public ok: string;
    public message: string;
    public body: Category[];
}

export class Category {
    id:number;
    categoryName: string;
    priority: number;
    savingSheets: SavingSheets;
    cashFlows: CashFlow[];

    constructor(categoryName: string, priority: number, savingSheets: SavingSheets, cashFlows: CashFlow[], id: number) {
        this.categoryName = categoryName;
        this.priority = priority;
        this.savingSheets = savingSheets;
        this.cashFlows = cashFlows;
        this.id = id;
        this.cashFlows = cashFlows;
    }
}

export class CashFlowContainer {
    public ok: string;
    public message: string;
    public body: CashFlow[]
}

export class CashFlow {
    id:number;
    color: number;
    amount: number;
    currentSaves: number;
    cashFlowName: string;
    recurrent: boolean;
    category: Category

    constructor(id: number, color: number, amount: number, currentSaves: number, cashFlowName: string, recurrent: boolean, category: Category) {
        this.id = id;
        this.color = color;
        this.amount = amount;
        this.currentSaves = currentSaves;
        this.cashFlowName = cashFlowName;
        this.category = category;
    }
}