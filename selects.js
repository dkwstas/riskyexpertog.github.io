document.getElementById('class_id').onchange = function () {
    document.getElementById('lesson_id').disabled = true;
    $(function () {
        $.ajax({
            url: 'https://reverse.banka.gr/services/cb/call/https://trapeza.iep.edu.gr/public/data.php?q=lesson&schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id),
            type: "GET",
            dataType: 'json',
            success: function (res) {
                console.log(res);

                const clean_array = res.map(({ name }) => ({ name })).map(i => Object.values(i)).flat()

                console.log(clean_array);

                i, L = document.getElementById('lesson_id').options.length - 1;
                for (i = L; i >= 0; i--) {
                    document.getElementById('lesson_id').remove(i);
                }

                var op_defl = document.createElement("option");
                op_defl.text = "Επιλέξτε μάθημα";
                op_defl.id = "op_defl";
                document.getElementById('lesson_id').appendChild(op_defl);

                var i = 0;
                for (const val of clean_array) {
                    var option = document.createElement("option");
                    option.value = val;
                    option.id = res.map(({ id }) => ({ id })).map(i => Object.values(i)).flat()[i];
                    option.text = val.charAt(0).toUpperCase() + val.slice(1);
                    document.getElementById('lesson_id').appendChild(option);
                    i++
                }
                if (document.getElementById('op_defc') != null) {
                    document.getElementById('class_id').remove('op_def')
                }


                document.getElementById('lesson_id').disabled = false;
                document.getElementById('lesson_id').style.backgroundColor = "#30ff4c";
            }
        });
    });
}

document.getElementById('lesson_id').onchange = function () {
    lesson_id = document.getElementById('lesson_id').options[document.getElementById('lesson_id').selectedIndex].id;
    document.getElementById('next-btn').style.display = "none";

    document.getElementById('prev-btn').disabled = true;
    document.getElementById('prev-btn').style.backgroundColor = "#a3a3a3";
    document.getElementById('prev-btn').classList.add("button--loading");

    document.getElementById('w_p').innerHTML = "Πατήστε <span style=\"background-color: #5102ac; color:white;\">Επόμενο</span> για κλήρωση θεμάτων";
    document.getElementById('warning').style.borderColor = "#46eb78";
    document.getElementById('w_s').innerHTML = "&nbsp;&#10004;&nbsp;";
    document.getElementById('w_s').style.color = "#46eb78";

    if (document.getElementById('op_defl') != null) {
        document.getElementById('lesson_id').remove('op_defl')
    }

    $(function () {
        $.ajax({
            url: 'https://reverse.banka.gr/services/cb/call/https://trapeza.iep.edu.gr/public/data.php?q=subject&schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id,
            type: "GET",
            dataType: 'json',
            error: function () {
                setTimeout(() => {
                    $.ajax(this);
                }, 5000)
            },
            success: function (res) {
                document.getElementById('next-btn').style.display = "block";
                document.getElementById('prev-btn').removeAttribute('style');
                document.getElementById('prev-btn').style.display = "block";
                document.getElementById('prev-btn').classList.remove("button--loading");
                document.getElementById('prev-btn').disabled = false;
                var data_array = res.map(({ subject }) => ({ subject })).map(i => Object.values(i)).flat()
                console.log(data_array)

                if (data_array.includes(2) && data_array.includes(4)) {
                    subject_comb = "n2-4";
                    if (data_array.includes(1) && data_array.includes(3)) {
                        subject_comb = subject_comb + "-1-3";
                    } else if (data_array.includes(3)) {
                        subject_comb = subject_comb + "-3";
                    } else if (data_array.includes(1)) {
                        subject_comb = subject_comb + "-1";
                    }
                } else {
                    subject_comb = "o-1";
                }
                console.log(subject_comb);
            }
        })
    })
}
