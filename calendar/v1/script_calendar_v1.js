document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let title = document.querySelectorAll("td");
    const calendartbody = document.querySelector('#calendartbody');
    let startDateOfMonths = 1;
    let todayFullDate = new Date();
    let year = todayFullDate.getFullYear();
    let month = todayFullDate.getMonth();
    

    let btn = document.querySelectorAll("td");
    btn[0].addEventListener("click", (e) => {
        decreaseMonth();
    });
    btn[2].addEventListener("click", (e) => {
        increaseMonth();
    });

    drawCalendar(year, month);

    function decreaseMonth() {
        month--;
        drawCalendar(year, month);
    }

    function increaseMonth() {
        month++;
        drawCalendar(year, month);
    }

    function drawCalendar(year, month) {
        calendartbody.innerHTML = " ";
        let date = new Date(year, month);
        title[1].innerHTML = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
        let dayInMonth = new Date(year, month + 1, 0).getDate();
        let firstDayWeek = new Date(year, month, 1).getDay();
        let todayDay = todayFullDate.getDate();
        startDateOfMonths = 1;

        for (let i = 0; i <= 5; i++) {
            let tr = document.createElement("tr");

            if (i == 0) {
                if (firstDayWeek >= 1) {
                    for (let k = 0; k < firstDayWeek - 1; k++) {
                        let td = document.createElement("td");
                        td.innerHTML = " ";
                        tr.append(td);
                    }
                    for (let j = 0; j <= 7 - firstDayWeek; j++) {
                        if (startDateOfMonths <= dayInMonth) {
                            let td = document.createElement("td");
                            td.innerHTML = startDateOfMonths;
                            tr.append(td);
                            startDateOfMonths++;
                        }
                    }
                } else {
                    for (let k = 0; k < 6; k++) {
                        let td = document.createElement("td");
                        td.innerHTML = " ";
                        tr.append(td);
                    }
                    if (startDateOfMonths <= dayInMonth) {
                        let td = document.createElement("td");
                        td.innerHTML = startDateOfMonths;
                        tr.append(td);
                        startDateOfMonths++;
                    }
                }
            } else {
                for (let j = 0; j <= 6; j++) {
                    if (startDateOfMonths <= dayInMonth) {
                        let td = document.createElement("td");
                        td.innerHTML = startDateOfMonths;
                        tr.append(td);
                        startDateOfMonths++;
                    }
                }
            }
            calendartbody.append(tr);
        }
    }
});