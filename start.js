import { get as get } from "./request.js";
import { print_notification as print_notification } from "./notification.js";
import { enable as enable, disable as disable, show as show, hide as hide} from "./control.js";

const start_button = document.getElementById("start_button");
const previous_button = document.getElementById("previous_button");
const next_button = document.getElementById("next_button");
const class_id_dropdown = document.getElementById("class_id");
const lesson_id_dropdown = document.getElementById("lesson_id");

start_button.onclick = async function () {
  disable(start_button);
  start_button.classList.add("button--loading");

  try {
    const res = await get("data.php", "q=class&schooltype=1");
    for (let i=0; i < res.length; i++) {
      console.log(`${i}: ${res[i].name}`);
      var option = document.createElement("option");
      option.value = i;
      option.text = res[i].name;
      class_id_dropdown.appendChild(option);
    }
    print_notification("click", "Επιλέξτε Τάξη και Μάθημα από τα παραπάνω μενού");
    class_id_dropdown.style.backgroundColor = "#30ff4c";
    class_id_dropdown.disabled = false;
    lesson_id_dropdown.style.backgroundColor = "#f71d0e";
    hide(start_button);
    show(previous_button);
    show(next_button);
    disable(previous_button);
    //disable(next_button);
    return;
    //console.log(res);
  } catch (error) {
    print_notification("warning", "Δεν ήταν δυνατή η σύνδεση");
    //console.log(error);
  }

  start_button.disabled = false;
  start_button.classList.remove("button--loading");
  start_button.removeAttribute('style');

}

function viewcount_loop(response) {
  setTimeout(function () {
    document.querySelector("#visits").innerHTML = " &#128065; " + response.value;
    $(function () {
      $.ajax({
        url: 'https://api.countapi.xyz/get/banka/d7f1c683-57d6-4847-95a8-4d8248affc32',
        type: "GET",
        success: function (response) {
          viewcount_loop(response)
        }
      });
    });
  }, 5000);
};
