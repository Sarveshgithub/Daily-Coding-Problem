/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let rev = [] , word = ''
    for(let i = s.length - 1 ; i >=0 ; i -- ){
        
        if(s[i] != ' '){
            word = s[i] + word
        }
        if(s[i] == ' ' && word.length > 0){
            rev.push(word)
            word = ''
        }
    }
  
    if(word != ' ' && word.length > 0){
            rev.push(word)
    }
      console.log(rev,word)
    return rev.join(' ')
};