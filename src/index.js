  
module.exports = function check(str, bracketsConfig) {

  let arrayJoin = bracketsConfig.map((e)=> e.join(''));
  
  for (let i = 0; i < arrayJoin.length; i++) {
    if (str.includes(arrayJoin[i]) == true) {
      str = str.replace(arrayJoin[i], '');
      i = -1;
    }
  }
  return Object.is(str, '');
}