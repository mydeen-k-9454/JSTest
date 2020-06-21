function test(a,b) {
    console.log("two");
}

function test(c) {
    console.log("one");
}

// test(8,9);

let add = function(a,b) {
    // console.log();
    console.log("called");
    return a+b;
};

// console.log(add(9+8));
console.log(handler.name);

// setTimeout(handler,2300);

function handler() {
    alert(1);
}

let cions  = new Function("b","c", "console.log(\"cons called\");");
cions("b","c");
(function selfInvoc() {
    console.log("self called)");
})();