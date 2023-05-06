export class FormField<T> {
  value: T|undefined;
  key: string;
  label: string;
  required: boolean;
  validator: string;
  order: number;
  controlType: string;
  type: string;
  amount:string|undefined;
  price:string|undefined;
  subtotal:string|undefined;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      validator?: string;
      order?: number;
      controlType?: string;
      type?: string;
      amount?:string|undefined;
      price?:string|undefined;
      subtotal?:string|undefined;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.validator = options.validator || "";
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.amount = options.amount;
    this.price = options.price;
    this.subtotal =options.subtotal;
    this.options = options.options || [];
  }
}
