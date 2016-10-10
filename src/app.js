import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');
const input = $('#input');
const inputToHtml = $('#inputToHtml');
const output = $('#output');

// button Click event 
const btnstream$ = Rx.Observable.fromEvent(btn, 'click');

btnstream$.subscribe(
    function (e) { // success
        console.log(e.target.innerHTML); // get button Name.
    },
    function (err) { // error

    },
    function () { //completed
        console.log('Button click Completed');
    }
);

// input event
const inputstream$ = Rx.Observable.fromEvent(input, 'keyup');

inputstream$.subscribe(
    function (e) { // success
        inputToHtml.html(e.currentTarget.value); // get button Name.
    },
    function (err) { // error

    },
    function () { //completed
        console.log('Button click Completed');
    }
);

// mouse move event
const mousemovestream$ = Rx.Observable.fromEvent(document, 'mousemove');

mousemovestream$.subscribe(
    function (e) { // success
        output.html('<h2>X: ' + e.clientX + ' Y: ' + e.clientY + '</h2>'); // get button Name.
    },
    function (err) { // error

    },
    function () { //completed
        console.log('Button click Completed');
    }
);