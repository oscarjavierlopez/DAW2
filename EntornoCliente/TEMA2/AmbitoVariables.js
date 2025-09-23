console.log(a);
var a = 1;
{
    console.log(a);
}
(function(){
    console.log(a);
    console.log(b);
    var b = 2;
    console.log(b);
}());
console.log(typeof b);
