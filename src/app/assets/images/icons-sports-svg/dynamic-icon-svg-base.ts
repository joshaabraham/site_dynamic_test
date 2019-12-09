export class IconBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    isClickable: boolean;
    isVisible: boolean;
    style: string;


    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        icon?: string,
        isClickable?: boolean,
        isVisible?: boolean,
        style?: string,
        route?: string

    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.isVisible = options.isVisible;
        this.style = options.style;
        this.isClickable = options.isClickable;
    }
}
