var random_number2_1, random_number2_2, random_number2_3, random_number4_1, random_number4_2, random_number4_3, code2_1, code2_2, code2_3, code4_1, code4_2, code4_3, link2_1, link2_2, link2_3, code4_3, link4_1, link4_2, link4_3

document.getElementById('prev-btn').onclick = function () {




    console.log(String(document.getElementById('lesson_id').style.backgroundColor))
    if (String(document.getElementById('form_section').style.display) == "none") {
        document.getElementById('subject_section').style.display = "none";
        document.getElementById('form_section').style.display = "block";
    } else {
        if (document.getElementById('lesson_id').style.backgroundColor == "rgb(247, 29, 14)") {

            document.getElementById('lesson_id').style.backgroundColor = "#ffffff"
            document.getElementById('class_id').style.backgroundColor = "#f71d0e"
            var i, L = document.getElementById('class_id').options.length - 1;
            for (i = L; i >= 0; i--) {
                document.getElementById('class_id').remove(i);
            }
            document.getElementById('class_id').add(new Option('Επιλέξτε τάξη ΓΕΛ', 'op_def'), undefined);
            document.getElementById('class_id').disabled = true;
            document.getElementById('get-btn').style.display = "block";
            document.getElementById('prev-btn').style.display = "none";
            document.getElementById('next-btn').style.display = "none";
        } else if (document.getElementById('lesson_id').style.backgroundColor == "rgb(48, 255, 76)") {
            document.getElementById('lesson_id').style.backgroundColor = "#ffffff"
            document.getElementById('class_id').style.backgroundColor = "#f71d0e"
            var i, L = document.getElementById('class_id').options.length - 1;
            for (i = L; i >= 0; i--) {
                document.getElementById('class_id').remove(i);
            }
            document.getElementById('class_id').add(new Option('Επιλέξτε τάξη ΓΕΛ', 'op_def'), undefined);

            i, L = document.getElementById('lesson_id').options.length - 1;
            for (i = L; i >= 0; i--) {
                document.getElementById('lesson_id').remove(i);
            }
            document.getElementById('lesson_id').add(new Option('Επιλέξτε μάθημα', 'op_def'), undefined);
            document.getElementById('lesson_id').disabled = true;
            document.getElementById('class_id').disabled = true;
            document.getElementById('get-btn').style.display = "block";
            document.getElementById('prev-btn').style.display = "none";
            document.getElementById('next-btn').style.display = "none";

        }
    }
}
document.getElementById('next-btn').onclick = function () {
    if (String(document.getElementById('form_section').style.display) == "none") {
        const lesson_id = String(document.getElementById('lesson_id').options[document.getElementById('lesson_id').selectedIndex].id);


        document.getElementById("next-btn").disabled = true;
        document.getElementById("class_id").disabled = true;
        document.getElementById("next-btn").style.background = "#a3a3a3";
        document.getElementById("next-btn").classList.add("button--loading");
        $(function () {
            $.ajax({
                url: 'http://192.168.1.106:8080/https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id + '&subject=2',
                type: "GET",
                dataType: 'json',
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

                    code2_1 = JSON.stringify(data_array[random_number2_1]).replace('{"id":"', '').replace('"}', '');
                    code2_2 = JSON.stringify(data_array[random_number2_2]).replace('{"id":"', '').replace('"}', '');
                    code2_3 = JSON.stringify(data_array[random_number2_3]).replace('{"id":"', '').replace('"}', '');

                    link2_1 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code2_1 + "&filetype=subject";
                    link2_2 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code2_2 + "&filetype=subject";
                    link2_3 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code2_3 + "&filetype=subject";

                    document.getElementById('sub2_1').textContent = code2_1;

                    document.getElementById('sub2_1').style.backgroundColor = "#1937fa";
                    document.getElementById('sub2_1').style.color = "#ebebeb";

                    document.getElementById('sub2_2').textContent = code2_2;
                    document.getElementById('sub2_3').textContent = code2_3;

                    document.getElementById('sub2_next').disabled = false;
                    document.getElementById('sub2_prev').disabled = false;
                    document.getElementById('sub2_select').disabled = false;

                    document.getElementById('pdf-viewer').src = link2_1;
                    document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

                    document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_1;
                    document.getElementById('span-p').style.color = "#74eb34";

                    $(function () {
                        $.ajax({
                            url: 'http://192.168.1.106:8080/https://www.iep.edu.gr/services/mitroo/trapeza/public/searchsubjects.php?schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id) + '&lesson=' + lesson_id + '&subject=4',
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

                                code4_1 = JSON.stringify(data_array[random_number4_1]).replace('{"id":"', '').replace('"}', '');
                                code4_2 = JSON.stringify(data_array[random_number4_2]).replace('{"id":"', '').replace('"}', '');
                                code4_3 = JSON.stringify(data_array[random_number4_3]).replace('{"id":"', '').replace('"}', '');

                                link4_1 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code4_1 + "&filetype=subject";
                                link4_2 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code4_2 + "&filetype=subject";
                                link4_3 = "https://www.iep.edu.gr/services/mitroo/trapeza/public/showfile.php/?id=" + code4_3 + "&filetype=subject";

                                document.getElementById('sub4_1').textContent = code4_1;

                                document.getElementById('sub4_1').style.backgroundColor = "#1937fa";
                                document.getElementById('sub4_1').style.color = "#ebebeb";

                                document.getElementById('sub4_2').textContent = code4_2;
                                document.getElementById('sub4_3').textContent = code4_3;

                                document.getElementById("next-btn").classList.remove("button--loading");
                                document.getElementById("next-btn").disabled = false;
                                document.getElementById("next-btn").removeAttribute('style');
                                document.getElementById("next-btn").style.display = "block";

                                document.getElementById('sub4_next').disabled = false;
                                document.getElementById('sub4_prev').disabled = false;
                                document.getElementById('sub4_select').disabled = false;
                            }
                        });
                    });



                }
            });
        });





    } else {
        if (document.getElementById('lesson_id').style.backgroundColor == "rgb(48, 255, 76)") {
            document.getElementById('form_section').style.display = "none";
            document.getElementById('subject_section').style.display = "block";
        } else {
            console.log('test')
            document.getElementById("next-btn").disabled = true;
            document.getElementById("class_id").disabled = true;
            document.getElementById("next-btn").style.background = "#a3a3a3";
            document.getElementById("next-btn").classList.add("button--loading");
            $(function () {
                $.ajax({
                    url: 'http://192.168.1.106:8080/https://www.iep.edu.gr/services/mitroo/trapeza/public/data.php?q=lesson&schooltype=1&class=' + String(document.getElementById('class_id').options[document.getElementById('class_id').selectedIndex].id),
                    type: "GET",
                    dataType: 'json',
                    success: function (res) {
                        console.log(res);

                        const clean_array = res.map(({ name }) => ({ name })).map(i => Object.values(i)).flat()

                        console.log(clean_array);

                        var i = 0;
                        for (const val of clean_array) {
                            var option = document.createElement("option");
                            option.value = val;
                            option.id = res.map(({ id }) => ({ id })).map(i => Object.values(i)).flat()[i];
                            option.text = val.charAt(0).toUpperCase() + val.slice(1);
                            document.getElementById('lesson_id').appendChild(option);
                            i++
                        }
                        document.getElementById("next-btn").classList.remove("button--loading");
                        document.getElementById("next-btn").disabled = false;
                        document.getElementById("next-btn").removeAttribute('style');
                        document.getElementById("next-btn").style.display = "block";
                        document.getElementById('lesson_id').remove('op_def')
                        document.getElementById('lesson_id').disabled = false;
                        document.getElementById('lesson_id').style.backgroundColor = "#30ff4c";
                    }
                });
            });
        }
    }


};


document.getElementById('sub2_next').onclick = function () {
    if (document.getElementById('sub2_1').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('sub2_2').style.backgroundColor = "#1937fa";
        document.getElementById('sub2_2').style.color = "#ebebeb";
        document.getElementById('sub2_1').style.backgroundColor = "#ffffff";
        document.getElementById('sub2_1').style.color = "#000000";

        document.getElementById('pdf-viewer').src = link2_2;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_2;
        document.getElementById('span-p').style.color = "#74eb34";

    } else if (document.getElementById('sub2_2').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('sub2_3').style.backgroundColor = "#1937fa";
        document.getElementById('sub2_3').style.color = "#ebebeb";
        document.getElementById('sub2_2').style.backgroundColor = "#ffffff";
        document.getElementById('sub2_2').style.color = "#000000";

        document.getElementById('pdf-viewer').src = link2_3;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_3;
        document.getElementById('span-p').style.color = "#74eb34";
    }
}

document.getElementById('sub2_prev').onclick = function () {
    if (document.getElementById('sub2_3').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('sub2_2').style.backgroundColor = "#1937fa";
        document.getElementById('sub2_2').style.color = "#ebebeb";
        document.getElementById('sub2_3').style.backgroundColor = "#ffffff";
        document.getElementById('sub2_3').style.color = "#000000";

        document.getElementById('pdf-viewer').src = link2_2;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_2;
        document.getElementById('span-p').style.color = "#74eb34";

    } else if (document.getElementById('sub2_2').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('sub2_1').style.backgroundColor = "#1937fa";
        document.getElementById('sub2_1').style.color = "#ebebeb";
        document.getElementById('sub2_2').style.backgroundColor = "#ffffff";
        document.getElementById('sub2_2').style.color = "#000000";

        document.getElementById('pdf-viewer').src = link2_1;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_1;
        document.getElementById('span-p').style.color = "#74eb34";

    }
}

document.getElementById('sub4_next').onclick = function () {
    if (document.getElementById('sub4_1').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('sub4_2').style.backgroundColor = "#1937fa";
        document.getElementById('sub4_2').style.color = "#ebebeb";
        document.getElementById('sub4_1').style.backgroundColor = "#ffffff";
        document.getElementById('sub4_1').style.color = "#000000";

        document.getElementById('pdf-viewer').src = link4_2;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_2;
        document.getElementById('span-p').style.color = "#74eb34";
    } else if (document.getElementById('sub4_2').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('sub4_3').style.backgroundColor = "#1937fa";
        document.getElementById('sub4_3').style.color = "#ebebeb";
        document.getElementById('sub4_2').style.backgroundColor = "#ffffff";
        document.getElementById('sub4_2').style.color = "#000000";

        document.getElementById('pdf-viewer').src = link4_3;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_3;
        document.getElementById('span-p').style.color = "#74eb34";
    }
}

document.getElementById('sub4_prev').onclick = function () {
    if (document.getElementById('sub4_3').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('sub4_2').style.backgroundColor = "#1937fa";
        document.getElementById('sub4_2').style.color = "#ebebeb";
        document.getElementById('sub4_3').style.backgroundColor = "#ffffff";
        document.getElementById('sub4_3').style.color = "#000000";

        document.getElementById('pdf-viewer').src = link4_2;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_2;
        document.getElementById('span-p').style.color = "#74eb34";
    } else if (document.getElementById('sub4_2').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('sub4_1').style.backgroundColor = "#1937fa";
        document.getElementById('sub4_1').style.color = "#ebebeb";
        document.getElementById('sub4_2').style.backgroundColor = "#ffffff";
        document.getElementById('sub4_2').style.color = "#000000";

        document.getElementById('pdf-viewer').src = link4_1;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_1;
        document.getElementById('span-p').style.color = "#74eb34";
    }
}

document.getElementById('sub2_select').onclick = function () {
    if (document.getElementById('sub2_1').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('pdf-viewer').src = link2_1;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_1;
        document.getElementById('span-p').style.color = "#74eb34";
    } else if (document.getElementById('sub2_2').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('pdf-viewer').src = link2_2;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_2;
        document.getElementById('span-p').style.color = "#74eb34";
    } else if (document.getElementById('sub2_3').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('pdf-viewer').src = link2_3;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ2_" + code2_3;
        document.getElementById('span-p').style.color = "#74eb34";
    } 
}

document.getElementById('sub4_select').onclick = function () {
    if (document.getElementById('sub4_1').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('pdf-viewer').src = link4_1;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_1;
        document.getElementById('span-p').style.color = "#74eb34";
    } else if (document.getElementById('sub4_2').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('pdf-viewer').src = link4_2;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_2;
        document.getElementById('span-p').style.color = "#74eb34";
    } else if (document.getElementById('sub4_3').style.backgroundColor == "rgb(25, 55, 250)") {
        document.getElementById('pdf-viewer').src = link4_3;
        document.getElementById('pdf-viewer').src = document.getElementById('pdf-viewer').src

        document.getElementById('span-p').textContent = " Σε λειτουργία Θ4_" + code4_3;
        document.getElementById('span-p').style.color = "#74eb34";
    } 
}

document.getElementById('test-btn').onclick = function () {
    console.log(String(document.getElementById('lesson_id').options[document.getElementById('lesson_id').selectedIndex].id));
    console.log(String(document.getElementById('form_section').style.display));
}