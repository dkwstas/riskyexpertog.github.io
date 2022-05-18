const getBtn = document.getElementById('get-btn');

document.getElementById('get-btn').onclick = function () {
  getBtn.disabled = true;
  document.getElementById('w_p').textContent = "Επιλέξτε Τάξη και Μάθημα από τα παραπάνω μενού";
  document.getElementById('warning').style.borderColor = "#3e52d6";
  document.getElementById('w_s').innerHTML = "&nbsp;&#9432;&nbsp;";
  document.getElementById('w_s').style.color = "#3e52d6";
  getBtn.style.backgroundColor = "#a3a3a3";
  getBtn.classList.add("button--loading");
  $(function () {
    $.ajax({
      url: 'https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/data.php?q=class&schooltype=1',
      type: "GET",
      dataType: 'json',
      success: function (res) {
        console.log(res);

        document.getElementById('class_id');

        const clean_array = res.map(({ name }) => ({ name })).map(i => Object.values(i)).flat()

        console.log(clean_array);

        var i = 0;
        for (const val of clean_array) {
          var option = document.createElement("option");
          option.value = val;
          option.id = res.map(({ id }) => ({ id })).map(i => Object.values(i)).flat()[i];
          option.text = val.charAt(0).toUpperCase() + val.slice(1);
          document.getElementById('class_id').appendChild(option);
          i++
        }

        
        document.getElementById('class_id').disabled = false;
        getBtn.classList.remove("button--loading");

        getBtn.disabled = false;
        getBtn.removeAttribute('style');
        document.getElementById('class_id').style.backgroundColor = "#30ff4c";
        document.getElementById('lesson_id').style.backgroundColor = "#f71d0e";

        getBtn.style.display = "none";

        document.getElementById("prev-btn").style.display = "block";

      }
    });
  });
}