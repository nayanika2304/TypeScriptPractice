const {Observable} = Rx;

const observable = new Observable((subscriber) =>{
    //Throw the value 1 into the pipeline
    subscriber.next(1)
    //Marks this observable as commplete
    subscriber.complete()
    //emit an error, no more values will come out
    subscriber.error(new Error('whatever went wrong'))
})

observable.subscribe({
    next(value){
        console.log('got a value',value)
    },
    complete(){
        console.log('Observable is complete')
    },
    error(err){
        console.log('BAD THING',err.message)
    }
})

/*
observable.subscribe(
    (value) => console.log('Next value',value),
    (err) => console.error('BAD!!',err.message),
    () => console.log('COMPLETE')
)*/

