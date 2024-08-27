import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test Suite: Format Currency');

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
}   else {
    console.log('failed');           
}

console.log('works with zero');

if (formatCurrency(0) === '0.00') {
    console.log('passed');  
} else {
    console.log('failed');
}

console.log('runs up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');  
} else {
    console.log('failed');
}

