import { Observable, Subscriber, from } from "rxjs";

let numbers = [1, 5, 10];
let source = from(numbers);

let sourceInstance = new Observable(Subscriber => {
  for (let n of numbers){
    Subscriber.next(n);
  }
  Subscriber.complete();
})

const myObserver = {
  next: (x: number) => { console.log(x) },
  error: (e: Error) => console.log(e),
  complete: ()=> console.log('complete')
}

function component() {
  source.subscribe(myObserver);  

  sourceInstance.subscribe(myObserver)
}

component();

