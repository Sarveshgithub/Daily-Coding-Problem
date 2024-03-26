/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
const map1 = new Map();
map1.set('I', 1);
map1.set('V', 5);
map1.set('X', 10);
map1.set('L', 50);
map1.set('C', 100);
map1.set('D', 500);
map1.set('M', 1000);
map1.set('IV', 4);
map1.set('IX', 9);
map1.set('XL', 40);
map1.set('XC', 90);
map1.set('CD', 400);
map1.set('CM', 900);
let i = 0 , sum = 0
while(i < s.length){
    if(map1.has(s.substring(i, i+2))){
        sum = sum + map1.get(s.substring(i, i+2))
        i = i+2
    }else{
    sum = sum + map1.get(s.substring(i, i+1))
    i++
    }
    console.log('insum>>>',sum)
}
console.log('sum>>>',sum)
return sum

};