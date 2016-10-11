import $ from 'jquery';
import Rx from 'rxjs/Rx';


const numbers = [33, 22, 44, 55, 77];
const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
    v => {
        console.log(v);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log('Completed');
    }
);