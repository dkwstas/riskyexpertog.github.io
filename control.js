function enable (control) {
    control.disabled = false;
    control.removeAttribute("style");
    show(control);
}

function disable (control) {
    control.disabled = true;
    control.style.backgroundColor = "#a3a3a3";
}

function show (control) {
    control.style.display = "block";
}

function hide (control) {
    control.style.display = "none";
}

function replace (control_1, control_2) {
    hide(control_1);
    show(control_2);
}

export { enable, disable, show, hide, replace }