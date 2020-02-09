
var split = () => 
{
    var str = "How are you doing today?"
    var res = str.split(" ");
    document.getElementById("demo").innerHTML = res;
}

var slice = () =>
{
    var str = "Hello world!";
    var res = str.slice(5, 10);
    document.getElementById("demo1").innerHTML = res;
}

var includes = () => 
{   
    var str = 'Departed Train'; 
    var value = str.includes('ed Trai'); 
    document.write(value); 
} 
var getTypeOf = (x) =>
{
    var typenew = (typeof x === 'string');
    document.getElementById('demo1').innerHTML = typenew;
}

var getJSON = () => 
{
    var obj = { name: "Kapil", today: new Date(), city: "San Jose" };
    var JSONVar = JSON.stringify(obj);
    document.getElementById('demo1').innerHTML = JSONVar; 
}

var parseJSON = () =>
{
    var JSONtxt = '{"name":"John", "age":31, "city":"New York"}';
    var obj = JSON.parse(JSONtxt);
    document.getElementById('demo1').innerHTML = obj.name;
}

var deStructObject = () =>
{
    var person1 = { name: "Kapil", city: "Nagpur"};
    var { city: birthCity} = person1;
    document.getElementById('demo1').innerHTML = birthCity;
}

var deStructArray = () =>
{
    var givenArray = ['My', 'Name', 'Is', 'Kapil'];
    var [ , , , name] = givenArray;
    document.getElementById('demo1').innerHTML = name;
}

var spreadFunction = () =>
{
    var localCommunities = ['Avalon Alameda', 'Avalon Cahill'];
    var globalCommunities = ['Centerra', '33rd South', ...localCommunities, 'One South', '101 San Fernando'];
    document.getElementById('demo1').innerHTML = globalCommunities;
}

var restFunction = (...theArgs) =>
{
    var params = Array.from(theArgs);
    document.getElementById('demo1').innerHTML = params;
}

var closureFunction = (firstNumber) =>
{
    return summation = (secondNumber) => {
        document.getElementById('demo1').innerHTML = firstNumber+secondNumber;
        return firstNumber+secondNumber;
    }
}

var addingTo11 = closureFunction(11);

class StaticMethodCall {

    static staticDefaultParamsMethod(val1, val2 = 3) {
        console.log('static method has been called.');
        document.getElementById('demo1').innerHTML = 'static method has been called ' + val1*val2;
    }
  }

var alertUser = () =>
{
    console.log(StaticMethodCall.staticDefaultParamsMethod(23));
}

var sentence = "How's are you?";
var regExSentence = sentence.replace( new RegExp("\\b(\\w+)'(s)\\b", "gi"), 
    function($0, $1, $2){
        return( $1 + " is");
    }
);

var convertToRegEx = () =>
{
    document.getElementById('demo1').innerHTML = regExSentence;
}

var defaultParamFunction = (val1, val2 = 1) =>
{
    document.getElementById('demo1').innerHTML = val1*val2;
}

class Professor{
    constructor(name, tenure){
        this.name = name;
        this.tenure = tenure;
    }
    introduction(){
        document.getElementById('demo1').innerHTML = this.name + ' is a professor in SJSU';
    }
}

class TenuredProfessor extends Professor{
    // constructor(name){
    //     this.name = name;
    //     this.tenure = "Yes";
    // }
    introduction(){
        document.getElementById('demo1').innerHTML = this.name + ' is a Tenured Professor in SJSU';
    }

}

class AdjunctProfessor extends Professor{
    // constructor(name){
    //     this.name = name;
    //     this.tenure = "No";
    //     super();
    // }
    introduction(){
        document.getElementById('demo1').innerHTML = this.name + ' is a Adjunct Professor in SJSU';
    }
}

var ranjan = new AdjunctProfessor("R. Ranjan", "No");
var weider = new TenuredProfessor("Weider Yu", "Yes");

const copyOfRanjan = Object.assign(weider, ranjan);


var inheritanceExample = () =>
{
    weider.introduction();
}

var fetchFunctionExample = () =>
{
    fetch('https://swapi.co/api/people/1/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
        document.getElementById('demo1').innerHTML = myJson.name;
    });
}



var varLetConstDiff = () =>
{
    const key = 12356;
    for(var i = 0; i < 10; i++){
        console.log(i);
    }
    console.log('Outside Loop i = ' + i);

    for(let j = 0; j < 5; j++){
        console.log(j);
    }
    console.log(j); //ReferenceError: j is not defined

    console.log('Updating key which is const');
    key = 156;  //TypeError: Assignment to constant variable.
    console.log(key);
}

// Object demoObj = {num:3};    
// var callDemo = (strNew) =>
// {
//     document.getElementById('demo1').innerHTML = str + strNew;

// }
// var test = () =>
// {
//     callDemo.call(demoObj, 'Kapil');
// }   
