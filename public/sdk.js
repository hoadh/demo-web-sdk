/* eslint-disable no-undef */
console.log('sdk ok', window.location.href);

// var cssId = 'myCss';  // you could encode the css path itself to generate id..
// if (!document.getElementById(cssId))
// {
//     var head  = document.getElementsByTagName('head')[0];
//     var link  = document.createElement('link');
//     link.id   = cssId;
//     link.rel  = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'https://5c97640fb679.ngrok.io/public/stylesheet.css';
//     link.media = 'all';
//     head.appendChild(link);
// }

// this will work in IE 10, 11 and Safari/Chrome/Firefox/Edge
// add ES6 poly-fill for the Promise, if needed (or rewrite to use a callback)

let fetchStyle = function(url) {
    return new Promise((resolve, reject) => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.onload = function() { resolve(); console.log('style has loaded'); };
        link.href = url;

        let headScript = document.querySelector('script');
        headScript.parentNode.insertBefore(link, headScript);
    });
};

fetchStyle('http://localhost:3000/public/stylesheet.css');
// fetchStyle('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

const addFloatingElement = function(d) {
    let circleIcon = d.createElement("i");
    circleIcon.classList.add("fa", "fa-comments");
    circleIcon.setAttribute("ariahidden", "true");

    let floatingElement = d.createElement('div');
    floatingElement.classList.add("floating-chat", "enter");
    floatingElement.appendChild(circleIcon);

    d.querySelector('body').appendChild(floatingElement);
};
addFloatingElement(document);