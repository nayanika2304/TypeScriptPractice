const {Observable} = Rx;
const {tap,share} = RxOperators

const observable = new Observable((subscriber) =>{
    //Throw the value 1 into the pipeline
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)

    //Marks this observable as commplete
    subscriber.complete()

    //emit an error, no more values will come out
    //subscriber.error(new Error('whatever went wrong'))


}).pipe(
    tap(value =>console.log('From tap',value )),
    share()
)

observable.subscribe(
    (value) => console.log('Next value',value),
    (err) => console.error('BAD!!',err.message),
    () => console.log('COMPLETE')
)

observable.subscribe(
    (value) => console.log('From second subscribe Next value',value)
)
