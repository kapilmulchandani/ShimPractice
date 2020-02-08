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

