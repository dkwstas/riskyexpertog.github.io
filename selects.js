import { get as get } from "./request.js";
import { print_notification as print_notification } from "./notification.js";
import { enable as enable, disable as disable, show as show, hide as hide} from "./control.js";

const class_id_dropdown = document.getElementById("class_id");
const lesson_id_dropdown = document.getElementById("lesson_id");
const next_button = document.getElementById("next_button");

class_id_dropdown.onchange = async function () {
    lesson_id_dropdown.disabled = true;

    if (class_id_dropdown.selectedIndex == 0) {
        return;
    }
    
    try {
        const res = await get("data.php", "q=lesson&schooltype=1&class=" + class_id_dropdown.selectedIndex);
        console.log(res);
        for (let i=lesson_id_dropdown.options.length - 1; i > 0; i--) {
            lesson_id_dropdown.remove(i);
        }
        for (let i=0; i < res.length; i++) {
            console.log(`${i}: ${res[i].name}`);
            var option = document.createElement("option");
            option.value = res[i].id;
            option.text = res[i].name;
            lesson_id_dropdown.appendChild(option);
        }
        document.getElementById('lesson_id').disabled = false;
        document.getElementById('lesson_id').style.backgroundColor = "#30ff4c";
    } catch (error) {
        print_notification("warning", "Δεν ήταν δυνατή ή σύνδεση");
        return;
    }
}

lesson_id_dropdown.onchange = function () {
    if (lesson_id_dropdown.selectedIndex == 0) {
        disable(next_button);
        return;
    } else {
        //next_button.removeAttribute("style");
        enable(next_button);
    }
}
