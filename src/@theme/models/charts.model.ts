export interface IChartPie {
    name: string;
    value: number;
    extra?: {
        currency: string;
    };
}

export interface IChartSimple {
    name: string;
    value: number | string;
    extra?: {
        currency: string;
    };
}
export interface IChartStacked {
    name: string;
    series: {
        name: string;
        value: number;
        color: string;
    }[];
}

export interface IcustomColorsChart {
    name: string;
    value: string;
}

export type TypeChartBar = 'horizontal' | 'vertical';
