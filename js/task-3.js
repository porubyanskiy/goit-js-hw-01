'use strict';

function getElementWidth(content, padding, border) { 
    const width = Number(content.slice(0, content.indexOf('px')))
        + (2 * Number(padding.slice(0, padding.indexOf('px'))))
        + (2 * Number(border.slice(0, border.indexOf('px'))));
    return width;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200