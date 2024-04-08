import { generate as generate, random_int_array as random_int_array } from "./random.js";
import { get as get, post as post } from "./request.js";
import { print_notification as print_notification } from "./notification.js";
import { enable as enable, disable as disable, show as show, hide as hide, replace as replace } from "./control.js";
import { selections as selections } from "./selection_buttons.js";

const next_button = document.getElementById("next_button");
const previous_button = document.getElementById("previous_button");
const create_button = document.getElementById("create_button");
const retrieve_button = document.getElementById("retrieve_button");
const main_form = document.getElementById("main_form");
const second_form_2 = document.getElementById("second_form_2");
const class_id_dropdown = document.getElementById("class_id");
const lesson_id_dropdown = document.getElementById("lesson_id");
const second_form_title = document.getElementById("second_form_title");

var code_array, selection_array = [-1, -1, -1, -1];

next_button.onclick = async function () {
    var doc_types;

    next_button.classList.add("button--loading");
    disable(class_id_dropdown);
    disable(lesson_id_dropdown);
    disable(next_button);

    try {
        doc_types = await get_doc_types();
        console.log(doc_types);
    } catch (error) {
        print_notification("warning", "Δεν ήταν δυνατή η σύνδεση");
        next_button.classList.remove("button--loading");
        enable(next_button);
        return;
    }

    second_form_title.textContent = class_id_dropdown.options[class_id_dropdown.selectedIndex].text + " " + lesson_id_dropdown.options[lesson_id_dropdown.selectedIndex].text;

    for (let i=0; i < doc_types.length; i++) {
        if (doc_types[i] == 0) {
            document.getElementById(`doc_button_${i * 3}`).textContent = " ";
            document.getElementById(`doc_button_${i * 3 + 2}`).textContent = " ";
            document.getElementById(`doc_button_${i * 3 + 1}`).textContent = "Δεν υπάρχουν θέματα";
        } else {
            show(document.getElementById(`yes_${i}`));
            show(document.getElementById(`no_${i}`));
        }
    }

    /*try {
        let res = await post("searchsubjects.php", `schooltype=1&class=${class_id_dropdown.selectedIndex}&lesson=${lesson_id_dropdown[lesson_id_dropdown.selectedIndex].value}&subject=2`);
        index_array = random_int_array(3, 0, res.data.length - 1);
        code_array = index_to_code(res, index_array);
        res = await post("searchsubjects.php", `schooltype=1&class=${class_id_dropdown.selectedIndex}&lesson=${lesson_id_dropdown[lesson_id_dropdown.selectedIndex].value}&subject=4`);
        index_array = random_int_array(3, 0, res.data.length - 1);
        code_array = code_array.concat(index_to_code(res, index_array));
        console.log(code_array);
    } catch (error) {
        print_notification("warning", "Δεν ήταν δυνατή η σύνδεση");
        return;
    }*/

    /*
    if (test_types[0] && test_types[2]) {
        document.getElementById("label_3").textContent = "Θέμα 1 & 3:";
    } else if (test_types[0]) {
        document.getElementById("label_3").textContent = "Θέμα 1:";
    } else if (test_types[2]) {
        document.getElementById("label_3").textContent = "Θέμα 3:";
    }*/

    //init_buttons();

    replace(main_form, second_form_2);

    enable(previous_button);
    next_button.classList.remove("button--loading");
    enable(next_button);

    replace(next_button, retrieve_button);
    //hide(next_button);
    //show(create_button);

    //change_selection(2, 1);
}

retrieve_button.onclick = async function () {
    var index_array = [], code_array = [];
    console.log(selections)
    for (let i=0; i < selections.length; i++) {
        if (selections[i] == 1) {
            try {
                let res = await post("searchsubjects.php", `schooltype=1&class=${class_id_dropdown.selectedIndex}&lesson=${lesson_id_dropdown[lesson_id_dropdown.selectedIndex].value}&subject=${i + 1}`);
                index_array = random_int_array(3, 0, res.data.length - 1);
                code_array = code_array.concat(index_to_code(res, index_array));
            } catch (error) {
                print_notification("warning", "Δεν ήταν δυνατή η σύνδεση");
                return;
            }
        }
    }

    console.log(code_array);
}

function update_pdf (selection) {
    if (test_type == 2) {
        document.getElementById('pdf_viewer').src = "https://trapeza.iep.edu.gr/public/showfile.php/?id=" + code_array[selection - 1] + "&filetype=subject";
        document.getElementById('span_pdf').textContent = ` Σε λειτουργία Θ${test_type}_` + code_array[selection - 1];
    } else {
        document.getElementById('pdf_viewer').src = "https://trapeza.iep.edu.gr/public/showfile.php/?id=" + code_array[selection + 2] + "&filetype=subject";
        document.getElementById('span_pdf').textContent = ` Σε λειτουργία Θ${test_type}_` + code_array[selection + 2];
    }
}

function change_selection (selection) {
    var test_type_index = test_type - 1;



    console.log(code_array);
    if (selection_array[test_type_index] != -1) {
        console.log(`doc_button${selection}}`);
        document.getElementById(`sub${test_type}_${selection_array[test_type_index]}`).style.backgroundColor = "#ffffff";
        document.getElementById(`sub${test_type}_${selection_array[test_type_index]}`).style.color = "#000000";
    }

    console.log(`sub${test_type}_${selection}`);
    document.getElementById(`sub${test_type}_${selection}`).style.backgroundColor = "#1937fa";
    document.getElementById(`sub${test_type}_${selection}`).style.color = "#ebebeb";
    
    selection_array[test_type_index] = selection;

    update_pdf(test_type, test_type_index);
}

function init_buttons () {
    document.getElementById("doc_button_0").textContent = code_array[0];
    document.getElementById("doc_button_1").textContent = code_array[1];
    document.getElementById("doc_button_2").textContent = code_array[2];

    document.getElementById('doc_button_0').style.backgroundColor = "#1937fa";
    document.getElementById('doc_button_0').style.color = "#ebebeb";

    document.getElementById("doc_button_3").textContent = code_array[3];
    document.getElementById("doc_button_4").textContent = code_array[4];
    document.getElementById("doc_button_5").textContent = code_array[5];

    document.getElementById('doc_button_3').style.backgroundColor = "#1937fa";
    document.getElementById('doc_button_3').style.color = "#ebebeb";
}

function index_to_code (res, index_array) {
    var codes = [];
    for (let i=0; i < index_array.length; i++) {
        codes.push(res.data[index_array[i]].id);
    }

    return(codes);
}

async function get_doc_types () {
    var doc_types = [0, 0, 0, 0];

    let res = await get("data.php", `q=subject&schooltype=1&class=${class_id_dropdown.selectedIndex}&lesson=${lesson_id_dropdown[lesson_id_dropdown.selectedIndex].value}`);
    for (let i=0; i < res.length; i++) {
        doc_types[res[i].subject - 1] = 1;
    }

    return(doc_types);
}