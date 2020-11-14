import {fromEvent} from 'Rx';
import {map} from 'RxOperators';

const input = document.createElement('input')
const container = document.querySelector('.container')
container.appendChild(input)

const observable = fromEvent(input,'input') // dom event emitting input
									.pipe(
                    map(event => event.target.value),
                    map(value => parseInt(value)),
                    map(value =>{
                    	if(isNaN(value)){
                      	throw new Error('Enter a number')
                      }
                      return value
                    })
                  )
observable.subscribe({
	next(value){
    console.log(`Your value is ${value}`)
  },
  error(err){
  	console.error('BAD THING HAPPENED',err.message)
  },

});
