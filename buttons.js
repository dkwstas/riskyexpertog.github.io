const { PDFDocument, rgb } = PDFLib
var random_number2_1, random_number2_2, random_number2_3, random_number4_1, random_number4_2, random_number4_3, code2_1, code2_2, code2_3, code4_1, code4_2, code4_3, link2_1, link2_2, link2_3, link4_1, link4_2, link4_3
var random_number1_1, random_number1_2, random_number1_3, random_number3, code1_1, code1_2, code1_3, code3, link1_1, link1_2, link1_3, link3
var sel1, sel2, sel3, sel4;
var lesson_id = document.getElementById('lesson_id').options[document.getElementById('lesson_id').selectedIndex].id;
var subject_comb
var subject_sel = "yes"
var pagenumber = 0
var maxpages = 0
var loops = 0

document.getElementById('prev-btn').onclick = function () {

    if (String(document.getElementById('form_section').style.display) == "none") {
        document.getElementById('subject_section').style.display = "none";
        document.getElementById('subject_1_section').style.display = "none";
        document.getElementById('form_section').style.display = "block";
        document.getElementById('next-btn').style.display = "block";
        document.getElementById('pub-btn').style.display = "none";

        document.getElementById('sub2_1').style.backgroundColor = "#ffffff";
        document.getElementById('sub2_1').style.color = "#000000";
        document.getElementById('sub2_2').style.backgroundColor = "#ffffff";
        document.getElementById('sub2_2').style.color = "#000000";
        document.getElementById('sub2_3').style.backgroundColor = "#ffffff";
        document.getElementById('sub2_3').style.color = "#000000";
        document.getElementById('sub4_1').style.backgroundColor = "#ffffff";
        document.getElementById('sub4_1').style.color = "#000000";
        document.getElementById('sub4_2').style.backgroundColor = "#ffffff";
        document.getElementById('sub4_2').style.color = "#000000";
        document.getElementById('sub4_3').style.backgroundColor = "#ffffff";
        document.getElementById('sub4_3').style.color = "#000000";
        document.getElementById('sub2_1').textContent = " ";
        document.getElementById('sub2_2').textContent = " ";
        document.getElementById('sub2_3').textContent = " ";
        document.getElementById('sub4_1').textContent = " ";
        document.getElementById('sub4_2').textContent = " ";
        document.getElementById('sub4_3').textContent = " ";
        document.getElementById('span-p').textContent = " Αναμονή";
        document.getElementById('span-p').style.color = "#e0b47a";

    } else {


        document.getElementById('lesson_id').style.backgroundColor = "#ffffff"
        document.getElementById('class_id').style.backgroundColor = "#f71d0e"
        var i, L = document.getElementById('class_id').options.length - 1;
        for (i = L; i >= 0; i--) {
            document.getElementById('class_id').remove(i);
        }
        var op_defc = document.createElement("option");
        op_defc.text = "Επιλέξτε τάξη ΓΕΛ";
        op_defc.id = "op_defc";
        document.getElementById('class_id').appendChild(op_defc);

        i, L = document.getElementById('lesson_id').options.length - 1;
        for (i = L; i >= 0; i--) {
            document.getElementById('lesson_id').remove(i);
        }
        var op_defl = document.createElement("option");
        op_defl.text = "Επιλέξτε μάθημα";
        op_defl.id = "op_defl";
        document.getElementById('lesson_id').appendChild(op_defl);
        document.getElementById('lesson_id').disabled = true;
        document.getElementById('class_id').disabled = true;
        document.getElementById('get-btn').style.display = "block";
        document.getElementById('prev-btn').style.display = "none";
        document.getElementById('next-btn').style.display = "none";

        document.getElementById('w_p').innerHTML = "Ξεκινήστε πατώντας <span style=\"background-color: #5102ac; color:white;\">Εκκίνηση</span> στο Παράθυρο ελέγχου";
        document.getElementById('warning').style.borderColor = "#ff0000";
        document.getElementById('w_s').innerHTML = "&nbsp;&#9888;&nbsp;";
        document.getElementById('w_s').style.color = "#ff0000";


    }
}

document.getElementById('next-btn').onclick = function () {
    document.getElementById("next-btn").disabled = true;
    document.getElementById("next-btn").style.backgroundColor = "#a3a3a3";
    document.getElementById("prev-btn").disabled = true;
    document.getElementById("prev-btn").style.backgroundColor = "#a3a3a3";
    document.getElementById("next-btn").classList.add("button--loading");


    if (subject_comb.includes("n2-4")) {


        if (subject_comb == "n2-4") {
            document.getElementById('opt_div').style.display = "none";
            document.getElementById('opt_h3').style.display = "none";
        } else {
            document.getElementById('opt_div').style.display = "block";
            document.getElementById('opt_h3').style.display = "block";
        }


        $(function () {
            $.ajax({
                url: 'https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id + '&subject=2',
                type: "GET",
                dataType: 'json',
                error: function () {
                    setTimeout(() => {
                        $.ajax(this);
                    }, 5000)
                },
                success: function (res) {
                    console.log(res);

                    var data_array = res.data.map(({ id }) => ({ id }));

                    min = Math.ceil(0);
                    max = Math.floor(data_array.length);

                    random_number2_1 = Math.floor(Math.random() * (max - min + 1) + min);
                    do {
                        random_number2_2 = Math.floor(Math.random() * (max - min + 1) + min);
                    }
                    while (random_number2_2 == random_number2_1);
                    do {
                        random_number2_3 = Math.floor(Math.random() * (max - min + 1) + min);
                    }
                    while (random_number2_3 == random_number2_2 || random_number2_3 == random_number2_1);



                    console.log(data_array);
                    console.log(String(random_number2_1) + " " + String(random_number2_2) + " " + String(random_number2_3));

                    try {
                        code2_1 = JSON.stringify(data_array[random_number2_1]).replace('{"id":"', '').replace('"}', '');
                        code2_2 = JSON.stringify(data_array[random_number2_2]).replace('{"id":"', '').replace('"}', '');
                        code2_3 = JSON.stringify(data_array[random_number2_3]).replace('{"id":"', '').replace('"}', '');
                    } catch {
                        $.ajax(this);
                    }


                    link2_1 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code2_1 + "&filetype=subject";
                    link2_2 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code2_2 + "&filetype=subject";
                    link2_3 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code2_3 + "&filetype=subject";

                    document.getElementById('sub2_1').textContent = code2_1;

                    document.getElementById('sub2_1').style.backgroundColor = "#1937fa";
                    document.getElementById('sub2_1').style.color = "#ebebeb";
                    sel2 = document.getElementById('sub2_1').textContent

                    document.getElementById('sub2_2').textContent = code2_2;
                    document.getElementById('sub2_3').textContent = code2_3;

                    document.getElementById('pdf-viewer').src = link2_1;
                    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

                    document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_1;
                    document.getElementById('span-p').style.color = "#74eb34";

                    $(function () {
                        $.ajax({

                            url: 'https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id + '&subject=4',
                            type: "GET",
                            dataType: 'json',
                            success: function (res) {
                                console.log(res);

                                var data_array = res.data.map(({ id }) => ({ id }));

                                min = Math.ceil(0);
                                max = Math.floor(data_array.length);

                                random_number4_1 = Math.floor(Math.random() * (max - min + 1) + min);
                                do {
                                    random_number4_2 = Math.floor(Math.random() * (max - min + 1) + min);
                                }
                                while (random_number4_2 == random_number4_1);
                                do {
                                    random_number4_3 = Math.floor(Math.random() * (max - min + 1) + min);
                                }
                                while (random_number4_3 == random_number4_2 || random_number4_3 == random_number4_1);



                                console.log(data_array);
                                console.log(String(random_number4_1) + " " + String(random_number4_2) + " " + String(random_number4_3));

                                try {
                                    code4_1 = JSON.stringify(data_array[random_number4_1]).replace('{"id":"', '').replace('"}', '');
                                    code4_2 = JSON.stringify(data_array[random_number4_2]).replace('{"id":"', '').replace('"}', '');
                                    code4_3 = JSON.stringify(data_array[random_number4_3]).replace('{"id":"', '').replace('"}', '');
                                } catch {
                                    $.ajax(this);
                                }

                                link4_1 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code4_1 + "&filetype=subject";
                                link4_2 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code4_2 + "&filetype=subject";
                                link4_3 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code4_3 + "&filetype=subject";


                                if (subject_comb == "n2-4-1-3") {
                                    document.getElementById('opt_h3').textContent = "Θέμα 1 & 3:";
                                    $(function () {
                                        $.ajax({

                                            url: 'https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id + '&subject=1',
                                            type: "GET",
                                            dataType: 'json',
                                            success: function (res) {
                                                console.log(res);

                                                var data_array = res.data.map(({ id }) => ({ id }));

                                                min = Math.ceil(0);
                                                max = Math.floor(data_array.length);

                                                random_number1 = Math.floor(Math.random() * (max - min + 1) + min);

                                                console.log(data_array);
                                                console.log(String(random_number1) + " " + String(random_number1) + " " + String(random_number1));

                                                try {
                                                    code1_1 = JSON.stringify(data_array[random_number1]).replace('{"id":"', '').replace('"}', '');
                                                } catch {
                                                    $.ajax(this);
                                                }

                                                sel1 = code1_1

                                                $(function () {
                                                    $.ajax({

                                                        url: 'https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id + '&subject=3',
                                                        type: "GET",
                                                        dataType: 'json',
                                                        success: function (res) {
                                                            console.log(res);

                                                            var data_array = res.data.map(({ id }) => ({ id }));

                                                            min = Math.ceil(0);
                                                            max = Math.floor(data_array.length);

                                                            random_number3 = Math.floor(Math.random() * (max - min + 1) + min);

                                                            console.log(data_array);
                                                            console.log(String(random_number3) + " " + String(random_number3) + " " + String(random_number3));

                                                            try {
                                                                code3 = JSON.stringify(data_array[random_number3]).replace('{"id":"', '').replace('"}', '');
                                                            } catch {
                                                                $.ajax(this);
                                                            }

                                                            sel3 = code3

                                                            f_show();

                                                        }
                                                    });
                                                });

                                            }
                                        });
                                    });
                                } else if (subject_comb == "n2-4-3") {
                                    document.getElementById('opt_h3').textContent = "Θέμα 3:";
                                    $(function () {
                                        $.ajax({

                                            url: 'https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id + '&subject=3',
                                            type: "GET",
                                            dataType: 'json',
                                            success: function (res) {
                                                console.log(res);

                                                var data_array = res.data.map(({ id }) => ({ id }));

                                                min = Math.ceil(0);
                                                max = Math.floor(data_array.length);

                                                random_number3 = Math.floor(Math.random() * (max - min + 1) + min);

                                                console.log(data_array);
                                                console.log(String(random_number3) + " " + String(random_number3) + " " + String(random_number3));

                                                try {
                                                    code3 = JSON.stringify(data_array[random_number3]).replace('{"id":"', '').replace('"}', '');
                                                } catch {
                                                    $.ajax(this);
                                                }

                                                sel3 = code3

                                                f_show();

                                            }
                                        });
                                    });


                                } else if (subject_comb == "n2-4-1") {
                                    document.getElementById('opt_h3').textContent = "Θέμα 1:";
                                    $(function () {
                                        $.ajax({

                                            url: 'https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id + '&subject=1',
                                            type: "GET",
                                            dataType: 'json',
                                            success: function (res) {
                                                console.log(res);

                                                var data_array = res.data.map(({ id }) => ({ id }));

                                                min = Math.ceil(0);
                                                max = Math.floor(data_array.length);

                                                random_number1 = Math.floor(Math.random() * (max - min + 1) + min);

                                                console.log(data_array);
                                                console.log(String(random_number1) + " " + String(random_number1) + " " + String(random_number1));

                                                try {
                                                    code1_1 = JSON.stringify(data_array[random_number1]).replace('{"id":"', '').replace('"}', '');
                                                } catch {
                                                    $.ajax(this);
                                                }

                                                sel1 = code1_1

                                                f_show();
                                            }
                                        });
                                    });
                                } else {
                                    f_show();
                                }



                            }
                        });
                    });



                }
            });
        });
    } else {
        $(function () {
            $.ajax({

                url: 'https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id + '&subject=1',
                type: "GET",
                dataType: 'json',
                success: function (res) {
                    console.log(res);

                    var data_array = res.data.map(({ id }) => ({ id }));

                    min = Math.ceil(0);
                    max = Math.floor(data_array.length);

                    random_number1_1 = Math.floor(Math.random() * (max - min + 1) + min);
                    do {
                        random_number1_2 = Math.floor(Math.random() * (max - min + 1) + min);
                    }
                    while (random_number1_2 == random_number1_1);
                    do {
                        random_number1_3 = Math.floor(Math.random() * (max - min + 1) + min);
                    }
                    while (random_number1_3 == random_number1_2 || random_number1_3 == random_number1_1);



                    console.log(data_array);
                    console.log(String(random_number1_1) + " " + String(random_number1_2) + " " + String(random_number1_3));

                    try {
                        code1_1 = JSON.stringify(data_array[random_number1_1]).replace('{"id":"', '').replace('"}', '');
                        code1_2 = JSON.stringify(data_array[random_number1_2]).replace('{"id":"', '').replace('"}', '');
                        code1_3 = JSON.stringify(data_array[random_number1_3]).replace('{"id":"', '').replace('"}', '');
                    } catch {
                        $.ajax(this);
                    }

                    link1_1 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code1_1 + "&filetype=subject";
                    link1_2 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code1_2 + "&filetype=subject";
                    link1_3 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code1_3 + "&filetype=subject";

                    document.getElementById('sub1_1').textContent = code1_1;

                    document.getElementById('sub1_1').style.backgroundColor = "#1937fa";
                    document.getElementById('sub1_1').style.color = "#ebebeb";
                    sel1 = document.getElementById('sub1_1').textContent

                    document.getElementById('sub1_2').textContent = code1_2;
                    document.getElementById('sub1_3').textContent = code1_3;

                    document.getElementById('pdf-viewer').src = link1_1;
                    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

                    document.getElementById('span-p').textContent = " Σε λειτουργία Θ1_" + code1_1;
                    document.getElementById('span-p').style.color = "#74eb34";

                    f_show();
                    document.getElementById('subject_1_section').style.display = "block";

                }
            });
        });
    }

    function f_show() {
        document.getElementById("pub-btn").style.display = "block";
        document.getElementById('sub4_1').textContent = code4_1;

        document.getElementById('sub4_1').style.backgroundColor = "#1937fa";
        document.getElementById('sub4_1').style.color = "#ebebeb";
        sel4 = document.getElementById('sub4_1').textContent

        document.getElementById('sub4_2').textContent = code4_2;
        document.getElementById('sub4_3').textContent = code4_3;

        document.getElementById("next-btn").classList.remove("button--loading");
        document.getElementById("next-btn").disabled = false;
        document.getElementById("next-btn").removeAttribute('style');
        document.getElementById("prev-btn").disabled = false;
        document.getElementById("prev-btn").removeAttribute('style');
        document.getElementById("prev-btn").style.display = "block";


        document.getElementById('form_section').style.display = "none";
        document.getElementById('subject_section').style.display = "block";
        document.getElementById("next-btn").style.display = "none";
    }

    document.getElementById('yes').onclick = function () {
        document.getElementById('yes').style.backgroundColor = "rgb(81, 253, 81)";
        document.getElementById('no').style.backgroundColor = "rgb(201, 201, 201)";
        subject_sel = "yes"
    }

    document.getElementById('no').onclick = function () {
        document.getElementById('yes').style.backgroundColor = "rgb(201, 201, 201)";
        document.getElementById('no').style.backgroundColor = "rgb(248, 66, 66)";
        subject_sel = "no"
    }

};

(function label_loop() {
    setTimeout(function () {
        loops++
        if(loops % 2 == 0){
            document.getElementById('w_p1').innerHTML = "Αν το αρχείο δεν ανοίξει μετά από 10 δευτερόλεπτα, ελέγξτε αν ο φιλομετρητής σας το μπλοκάρει (στο πάνω μέρος της οθόνης)";
            document.getElementById('warning1').style.borderColor = "#ff0000";
            document.getElementById('w_s1').innerHTML = "&nbsp;&#9888;&nbsp;";
            document.getElementById('w_s1').style.color = "#ff0000";
            document.getElementById('w_p2').innerHTML = "Αν το αρχείο δεν ανοίξει μετά από 10 δευτερόλεπτα, ελέγξτε αν ο φιλομετρητής σας το μπλοκάρει (στο πάνω μέρος της οθόνης)";
            document.getElementById('warning2').style.borderColor = "#ff0000";
            document.getElementById('w_s2').innerHTML = "&nbsp;&#9888;&nbsp;";
            document.getElementById('w_s2').style.color = "#ff0000";
        } else {
            document.getElementById('w_p1').innerHTML = "Η διαδικασία ολοκληρώθηκε πατήστε <span style=\"background-color: #5102ac; color:white;\">Ανανέωση &#10227;</span> στο Παράθυρο ελέγχου";
            document.getElementById('warning1').style.borderColor = "#5102ac";
            document.getElementById('w_s1').innerHTML = "&nbsp;&#10227;&nbsp;";
            document.getElementById('w_s1').style.color = "#5102ac";
            document.getElementById('w_p2').innerHTML = "Η διαδικασία ολοκληρώθηκε πατήστε <span style=\"background-color: #5102ac; color:white;\">Ανανέωση &#10227;</span> στο Παράθυρο ελέγχου";
            document.getElementById('warning2').style.borderColor = "#5102ac";
            document.getElementById('w_s2').innerHTML = "&nbsp;&#10227;&nbsp;";
            document.getElementById('w_s2').style.color = "#5102ac";
        }
      label_loop()
    }, 5000);
  }());

document.getElementById('pub-btn').onclick = function () {
    loops++
    label_loop();
    document.getElementById('pub-btn').disabled = true;
    document.getElementById('pub-btn').style.backgroundColor = "#a3a3a3";
    document.getElementById('pub-btn').classList.add("button--loading");
    console.log(sel2)


    document.getElementById('prev-btn').style.display = "none";
    document.getElementById('top-left').style.pointerEvents = 'none';


    console.log(subject_comb)

    if (subject_sel == "yes") {
        if (subject_comb == "n2-4") {
            mergeAllPDFs(["https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel2 + "&filetype=subject", "https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel4 + "&filetype=subject"]);
        } else if (subject_comb == "n2-4-1-3") {
            mergeAllPDFs(["https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel1 + "&filetype=subject", "https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel2 + "&filetype=subject", "https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel3 + "&filetype=subject", "https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel4 + "&filetype=subject"]);
        } else if (subject_comb == "n2-4-3") {
            mergeAllPDFs(["https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel2 + "&filetype=subject", "https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel3 + "&filetype=subject", "https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel4 + "&filetype=subject"]);
        } else if (subject_comb == "n2-4-1") {
            mergeAllPDFs(["https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel1 + "&filetype=subject", "https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel2 + "&filetype=subject", "https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel4 + "&filetype=subject"]);
        } else if (subject_comb == "o-1") {
            mergeAllPDFs(["https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel1 + "&filetype=subject"]);
        }
    } else {
        if (subject_comb.includes("n2-4")) {
            mergeAllPDFs(["https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel2 + "&filetype=subject", "https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel4 + "&filetype=subject"]);
        } else if (subject_comb == "o-1") {
            mergeAllPDFs(["https://reverse.banka.gr:8443/https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + sel1 + "&filetype=subject"]);
        }
    }



    document.getElementById('reload-btn').style.display = "block";
}
async function mergeAllPDFs(urlarray) {

    pagenumber = 0
    maxpages = 0

    const url = 'https://www.banka.gr/JetBrainsMono-VariableFont_wght.ttf'
    const fontBytes = await fetch(url).then((res) => res.arrayBuffer())

    const pdfDoc = await PDFLib.PDFDocument.create();

    pdfDoc.registerFontkit(fontkit)
    const JetBrainsMono = await pdfDoc.embedFont(fontBytes)

    // Add a blank page to the document
    const page = pdfDoc.addPage()

    // Get the width and height of the page
    const { width, height } = page.getSize()

    // Draw a string of text toward the top of the page
    const fontSize = 30
    const numDocs = urlarray.length;
    for (var i = 0; i < numDocs; i++) {
        const donorPdfBytes = await fetch(urlarray[i]).then(res => res.arrayBuffer());
        const donorPdfDoc = await PDFLib.PDFDocument.load(donorPdfBytes);
        const docLength = donorPdfDoc.getPageCount();

        for (var k = 0; k < docLength; k++) {
            maxpages++
            const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [k]);
        }
    }

    page.drawText('Από τους μαθητές του Β1 ~ 2ο ΓΕΛ ΔΡΑΜΑΣ ~', {
        x: 5,
        y: height - 15,
        size: 10,
        font: JetBrainsMono,
    }),
        page.drawText('banka', {
            x: width / 2 - 35,
            y: height - 3 * fontSize,
            size: fontSize,
            font: JetBrainsMono,
        }),
        page.drawText('Τεστ Προσομοίωσης', {
            x: 20,
            y: height - 6 * fontSize,
            size: fontSize,
            font: JetBrainsMono,
        }),
        page.drawText('Τράπεζας Θεμάτων', {
            x: 20,
            y: height - 7 * fontSize,
            size: fontSize,
            font: JetBrainsMono,
        }),
        page.drawText('Εξεταζόμενο μάθημα: ' + document.getElementById('lesson_id').options[document.getElementById('lesson_id').selectedIndex].value, {
            x: 20,
            y: height - 11 * fontSize,
            size: 16,
            font: JetBrainsMono,
        }),
        page.drawText('Αριθμός σελίδων: ' + maxpages, {
            x: 20,
            y: height - 13 * fontSize,
            size: 16,
            font: JetBrainsMono,
        }),
        page.drawText(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].value, {
            x: width / 2 - 30,
            y: height - 16 * fontSize,
            size: 16,
            font: JetBrainsMono,
        }),
        page.drawText('Καλή επιτυχία!', {
            x: width / 2 - 60,
            y: height - 21 * fontSize,
            size: 16,
            font: JetBrainsMono,
        })








    for (var i = 0; i < numDocs; i++) {
        const donorPdfBytes = await fetch(urlarray[i]).then(res => res.arrayBuffer());
        const donorPdfDoc = await PDFLib.PDFDocument.load(donorPdfBytes);
        const docLength = donorPdfDoc.getPageCount();

        for (var k = 0; k < docLength; k++) {
            pagenumber++
            const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [k]);
            donorPage.drawText(String("ΤΕΛΟΣ " + pagenumber + "ΗΣ ΑΠΟ " + maxpages + " ΣΕΛΙΔΕΣ"), {
                x: width / 2 - 90,
                y: 20,
                size: 14,
                font: JetBrainsMono,
            })
            pdfDoc.addPage(donorPage);
        }
    }
    const pdfBytes = await pdfDoc.save()

    const pdfUrl = URL.createObjectURL(
        new Blob([pdfBytes], { type: 'application/pdf' }),
    );
    window.open(pdfUrl, "output.pdf", "application/pdf");
    document.getElementById('pub-btn').removeAttribute('style');
    document.getElementById('pub-btn').style.display = "block";
    document.getElementById('pub-btn').classList.remove("button--loading");
    document.getElementById('pub-btn').disabled = false;
}

document.getElementById('reload-btn').onclick = function () {
    location.reload(true);
}

document.getElementById('sub1_1').onclick = function () {
    document.getElementById('sub1_1').style.backgroundColor = "#1937fa";
    document.getElementById('sub1_1').style.color = "#ebebeb";
    document.getElementById('sub1_2').style.backgroundColor = "#ffffff";
    document.getElementById('sub1_2').style.color = "#000000";
    document.getElementById('sub1_3').style.backgroundColor = "#ffffff";
    document.getElementById('sub1_3').style.color = "#000000";

    document.getElementById('pdf-viewer').src = link1_1;
    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

    document.getElementById('span-p').textContent = " Σε λειτουργία Θ1_" + code1_1;
    document.getElementById('span-p').style.color = "#74eb34";
    sel1 = document.getElementById('sub1_1').textContent
}
document.getElementById('sub1_2').onclick = function () {
    document.getElementById('sub1_2').style.backgroundColor = "#1937fa";
    document.getElementById('sub1_2').style.color = "#ebebeb";
    document.getElementById('sub1_1').style.backgroundColor = "#ffffff";
    document.getElementById('sub1_1').style.color = "#000000";
    document.getElementById('sub1_3').style.backgroundColor = "#ffffff";
    document.getElementById('sub1_3').style.color = "#000000";

    document.getElementById('pdf-viewer').src = link1_2;
    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

    document.getElementById('span-p').textContent = " Σε λειτουργία Θ1_" + code1_2;
    document.getElementById('span-p').style.color = "#74eb34";
    sel1 = document.getElementById('sub1_2').textContent
}
document.getElementById('sub1_3').onclick = function () {
    document.getElementById('sub1_3').style.backgroundColor = "#1937fa";
    document.getElementById('sub1_3').style.color = "#ebebeb";
    document.getElementById('sub1_2').style.backgroundColor = "#ffffff";
    document.getElementById('sub1_2').style.color = "#000000";
    document.getElementById('sub1_1').style.backgroundColor = "#ffffff";
    document.getElementById('sub1_1').style.color = "#000000";

    document.getElementById('pdf-viewer').src = link1_3;
    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

    document.getElementById('span-p').textContent = " Σε λειτουργία Θ1_" + code1_3;
    document.getElementById('span-p').style.color = "#74eb34";
    sel1 = document.getElementById('sub1_3').textContent
}
document.getElementById('sub2_1').onclick = function () {
    document.getElementById('sub2_1').style.backgroundColor = "#1937fa";
    document.getElementById('sub2_1').style.color = "#ebebeb";
    document.getElementById('sub2_2').style.backgroundColor = "#ffffff";
    document.getElementById('sub2_2').style.color = "#000000";
    document.getElementById('sub2_3').style.backgroundColor = "#ffffff";
    document.getElementById('sub2_3').style.color = "#000000";

    document.getElementById('pdf-viewer').src = link2_1;
    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

    document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_1;
    document.getElementById('span-p').style.color = "#74eb34";
    sel2 = document.getElementById('sub2_1').textContent
}
document.getElementById('sub2_2').onclick = function () {
    document.getElementById('sub2_2').style.backgroundColor = "#1937fa";
    document.getElementById('sub2_2').style.color = "#ebebeb";
    document.getElementById('sub2_1').style.backgroundColor = "#ffffff";
    document.getElementById('sub2_1').style.color = "#000000";
    document.getElementById('sub2_3').style.backgroundColor = "#ffffff";
    document.getElementById('sub2_3').style.color = "#000000";

    document.getElementById('pdf-viewer').src = link2_2;
    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

    document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_2;
    document.getElementById('span-p').style.color = "#74eb34";
    sel2 = document.getElementById('sub2_2').textContent
}
document.getElementById('sub2_3').onclick = function () {
    document.getElementById('sub2_3').style.backgroundColor = "#1937fa";
    document.getElementById('sub2_3').style.color = "#ebebeb";
    document.getElementById('sub2_2').style.backgroundColor = "#ffffff";
    document.getElementById('sub2_2').style.color = "#000000";
    document.getElementById('sub2_1').style.backgroundColor = "#ffffff";
    document.getElementById('sub2_1').style.color = "#000000";

    document.getElementById('pdf-viewer').src = link2_3;
    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

    document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_3;
    document.getElementById('span-p').style.color = "#74eb34";
    sel2 = document.getElementById('sub2_3').textContent
}
document.getElementById('sub4_1').onclick = function () {
    document.getElementById('sub4_1').style.backgroundColor = "#1937fa";
    document.getElementById('sub4_1').style.color = "#ebebeb";
    document.getElementById('sub4_2').style.backgroundColor = "#ffffff";
    document.getElementById('sub4_2').style.color = "#000000";
    document.getElementById('sub4_3').style.backgroundColor = "#ffffff";
    document.getElementById('sub4_3').style.color = "#000000";

    document.getElementById('pdf-viewer').src = link4_1;
    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

    document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_1;
    document.getElementById('span-p').style.color = "#74eb34";
    sel4 = document.getElementById('sub4_1').textContent
}
document.getElementById('sub4_2').onclick = function () {
    document.getElementById('sub4_2').style.backgroundColor = "#1937fa";
    document.getElementById('sub4_2').style.color = "#ebebeb";
    document.getElementById('sub4_1').style.backgroundColor = "#ffffff";
    document.getElementById('sub4_1').style.color = "#000000";
    document.getElementById('sub4_3').style.backgroundColor = "#ffffff";
    document.getElementById('sub4_3').style.color = "#000000";

    document.getElementById('pdf-viewer').src = link4_2;
    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

    document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_2;
    document.getElementById('span-p').style.color = "#74eb34";
    sel4 = document.getElementById('sub4_2').textContent
}
document.getElementById('sub4_3').onclick = function () {
    document.getElementById('sub4_3').style.backgroundColor = "#1937fa";
    document.getElementById('sub4_3').style.color = "#ebebeb";
    document.getElementById('sub4_2').style.backgroundColor = "#ffffff";
    document.getElementById('sub4_2').style.color = "#000000";
    document.getElementById('sub4_1').style.backgroundColor = "#ffffff";
    document.getElementById('sub4_1').style.color = "#000000";

    document.getElementById('pdf-viewer').src = link4_3;
    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

    document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_3;
    document.getElementById('span-p').style.color = "#74eb34";
    sel4 = document.getElementById('sub4_3').textContent
}