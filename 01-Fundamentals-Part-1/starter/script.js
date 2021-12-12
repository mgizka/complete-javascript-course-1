//'use script'

console.log('Inside scrpt.js')

var testVarGlobalScope = true
let testLetGlobalScope = true
const testConstGlobalScope = true

function sampleFunction(){
    console.log(testVarGlobalScope)
    console.assert(testVarGlobalScope===true)

    var testVarFunctionScope = true
    console.log(testVarFunctionScope)
    console.assert(testVarFunctionScope===true)

    let testLetFunctionScope = true
    console.log(testLetFunctionScope)
    console.assert(testLetFunctionScope===true)

    console.log(testLetGlobalScope)
    console.assert(testLetGlobalScope===true)

    let testConstFunctionScope = true
    {
    console.log(testConstFunctionScope)
    console.assert(testConstFunctionScope===true)

    console.log(testConstGlobalScope)
    console.assert(testConstGlobalScope===true)

    }

    
}

sampleFunction()

let result

try {
    let result = JSON.parse("some text");
 } catch (e) {
    if (e instanceof TypeError) {
       console.log('TypeError Occured!');
    } else if (e instanceof EvalError) {
       console.log('EvalError Occured!');
    } else if (e instanceof SyntaxError) {
       console.log('SyntaxError Occured!');
    } else {
       console.log('OtherError Occured!'); 
    }
 } finally {
    console.log('Finally! ' + result);
 }

 
 console.log(test)

 test=null

 //var test



 