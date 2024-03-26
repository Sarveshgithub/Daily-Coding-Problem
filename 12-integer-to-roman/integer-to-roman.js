/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
const map1 = new Map();
map1.set(1,'I');
map1.set(2,'II');
map1.set(3,'III');
map1.set(4,'IV');
map1.set(5,'V');
map1.set(6,'VI');
map1.set(7,'VII');
map1.set(8,'VIII');
map1.set(9,'IX');
map1.set(10,'X');
map1.set(40,'XL');
map1.set(50,'L');
map1.set(90,'XC');
map1.set(100,'C');
map1.set(400,'CD');
map1.set(500,'D');
map1.set(900,'CM');
map1.set(1000,'M');
let r = ''
while(num > 0){
    if(num >= 1000){
        r = r+'M'
        num = num - 1000
    }else if(num >= 900){
        r = r+'CM'
        num = num - 900
    }else if(num >= 500){
        r = r+map1.get(500)
        num = num - 500
    }else if(num >= 400){
        r = r+map1.get(400)
        num = num - 400
    }else if(num >= 100){
        r = r+map1.get(100)
        num = num - 100
    }else if(num >= 90){
        r = r+map1.get(90)
        num = num - 90
    }else if(num >= 50){
        r = r+map1.get(50)
        num = num - 50
    }else if(num >= 40){
        r = r+map1.get(40)
        num = num - 40
    }else if(num >= 10){
        r = r+map1.get(10)
        num = num - 10
    }else if(num <= 10){
        r = r+map1.get(num)
        num = num - num
    }
}
//console.log('rr',r)
return r
};