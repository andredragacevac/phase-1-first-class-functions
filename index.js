const spy = chai.spy();
function receivesAFunction(spy){
console.log(spy());
}


function returnsANamedFunction(){
    return function namedFunction(){}
 }

function returnsAnAnonymousFunction(){
    return function(){}
}