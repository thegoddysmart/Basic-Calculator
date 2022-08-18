let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equalTo = document.querySelector('.btn-equal');


buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
    let value = e.target.dataset.num;
        
        screen.value += value;
        
    })
});

function answer() {
        let ans = Function("return " + screen.value)();
        screen.value = ans;
    }
;


clear.addEventListener('click', function (e) {
    screen.value = "";
});

