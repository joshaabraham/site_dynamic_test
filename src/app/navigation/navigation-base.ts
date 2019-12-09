export class NavigationBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    icon: string;
    auth: string;
    isVisible: boolean;
    style: string;
    route: string;
  
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        icon?: string,
        auth?: string,
        isVisible?: boolean,
        style?: string,
        route?: string

      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.icon = options.icon;
      this.auth = options.auth;
      this.isVisible = options.isVisible;
      this.style = options.style;
      this.route = options.route;
    }
  }
  