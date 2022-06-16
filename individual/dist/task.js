var btn = document.getElementById('add_btn');
//const arr = document.getElementById('arr')as HTMLInputElement
var str1 = document.getElementById('str1');
var bool = document.getElementById('bool');
function fun1() {
    console.log("Hello TypeScript");
}
function log(str1) {
    var user = [18, 56];
    console.log(str1);
    if (str1 == 'alina') {
        return user;
    }
    return [180, 560];
}
var fun2 = function (bool) {
    if (bool == false) {
        console.log("You choose variant false!");
        console.log(0);
    }
    else {
        console.log("You choose variant true!");
        console.log(1);
    }
};
btn.addEventListener('click', function () {
    console.log(
    // fun1(),
    log(str1.value)
    // fun2(false)
    );
});
//# sourceMappingURL=task.js.map