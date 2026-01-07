/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     let b = s.split("");
    console.log(b);
    let nS = [];

    for (let i = 0; i < b.length; i++) {
        if ((s[i] == '(') || (s[i] == '[') || (s[i] == '{')) {
            nS.push(s[i]);
        }
        else {
            if (nS.length <= 0) return false;
            let pop = nS.pop();
            if (pop == '(' && s[i] != ')' ||
                pop == '{' && s[i] != '}' ||
                pop == '[' && s[i] != ']'
            ) {
                return false;
            }
        }
    }
    return nS.length == 0;
};