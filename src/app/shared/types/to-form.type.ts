import { FormControl } from "@angular/forms";

export type toFormType<Type> = {
    [Property in keyof Type]: FormControl<Type[Property]>;
};