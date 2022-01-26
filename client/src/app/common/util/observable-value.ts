import { Subject } from 'rxjs';

export class ObservableValue<T> {

    private internalValue: T = null;
    public readonly changed: Subject<T> = new Subject<T>();

    public constructor(initialValue?: T) {
        this.internalValue = initialValue;
    }

    public set value(value: T) {
        this.internalValue = value;
        this.changed.next(this.internalValue);
    }

    public get value(): T {
        return this.internalValue;
    }

}