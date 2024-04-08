import { enable as enable, disable as disable } from "./control.js";
const retrieve_button = document.getElementById("retrieve_button");
const COLOR = Object.freeze({
    GREEN: "#51fd51",
    RED: "#f84242",
    GRAY: "#c9c9c9"
})
var doc_buttons = [], yes_buttons = [], no_buttons = [];
export var selections = [1, 1, 1, 1];

for (let i=0; i <= 11; i++) {
    doc_buttons.push(document.getElementById(`doc_button_${i}`));
}
for (let i=0; i <= 3; i++) {
    yes_buttons.push(document.getElementById(`yes_${i}`));
    no_buttons.push(document.getElementById(`no_${i}`));
}

doc_buttons[0].onclick = function () {
    change_selection(0);
}

doc_buttons[1].onclick = function () {
    change_selection(1);
}

doc_buttons[2].onclick = function () {
    change_selection(2);
}

doc_buttons[3].onclick = function () {
    change_selection(3);
}

doc_buttons[4].onclick = function () {
    change_selection(4);
}

doc_buttons[5].onclick = function () {
    change_selection(5);
}

doc_buttons[6].onclick = function () {
    change_selection(6);
}

doc_buttons[7].onclick = function () {
    change_selection(7);
}

doc_buttons[8].onclick = function () {
    change_selection(8);
}

doc_buttons[9].onclick = function () {
    change_selection(9);
}

doc_buttons[10].onclick = function () {
    change_selection(10);
}

doc_buttons[11].onclick = function () {
    change_selection(11);
}

yes_buttons[0].onclick = function () {
    toggle_yes_no(0);
}

yes_buttons[1].onclick = function () {
    toggle_yes_no(1);
}

yes_buttons[2].onclick = function () {
    toggle_yes_no(2);
}

yes_buttons[3].onclick = function () {
    toggle_yes_no(3);
}

no_buttons[0].onclick = function () {
    toggle_yes_no(0);
}

no_buttons[1].onclick = function () {
    toggle_yes_no(1);
}

no_buttons[2].onclick = function () {
    toggle_yes_no(2);
}

no_buttons[3].onclick = function () {
    toggle_yes_no(3);
}

function toggle_yes_no (id) {
    if (selections[id] == 0) {
        yes_buttons[id].style.backgroundColor = COLOR.GREEN;
        no_buttons[id].style.backgroundColor = COLOR.GRAY;
        selections[id] = 1;
    } else {
        yes_buttons[id].style.backgroundColor = COLOR.GRAY;
        no_buttons[id].style.backgroundColor = COLOR.RED;
        selections[id] = 0;
    }
    console.log(sum_of_selections);

    if (sum_of_selections() == 0) {
        disable(retrieve_button);
    } else {
        console.log(selections);
        enable(retrieve_button);
    }
}

function sum_of_selections () {
    var sum = 0;

    for (let i=0; i < selections.length; i++) {
        sum += selections[i];
    }

    return(sum);
}