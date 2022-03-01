'use strict';
let a = 0;
let broken = 0;
let arcana = {
    zatochka: a,
};
let wipki = 0;
for (let i = 0; a < 16; i++) {
    if (a < 4) {
        a++;
    } else {
        let ab = Math.round(Math.random()*100);
        
        if (ab < 68) {
            a++;
            // console.log("успешно");
        } else {
            a=0;
            broken++;
            // console.log("провал");
        }
    }
    i++;
    wipki++;
}
console.log(`Сломалось ${broken}`);
console.log(`Использовано точек ${wipki}`);


