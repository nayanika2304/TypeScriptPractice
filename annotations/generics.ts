class ValueHolder<T>{
    value: T | undefined
}

const numberHolder = new ValueHolder<number>()
numberHolder.value = 10;

const valueWrapper = <T>(value: T) : T[] =>{
    return [value]
}

valueWrapper<number>(10);
const bool = valueWrapper(true)
