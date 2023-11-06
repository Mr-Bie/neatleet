var groupAnagrams = function(strs) {
  if (strs.length === 1) return [strs];

  const strsObject = {};
    strs = strs.map(value => {
      const sortedString = value.split("").sort().join("");
      const key = sortedString;
      strsObject[key] = [...(strsObject[key]|| []), value];
      return sortedString;
    });
    console.log(strsObject);
    strs = strs.sort();
    let temp = [];
    const strsLength = strs.length;
    const salam = [];
    const pushKonToSalam = (strArray) => {
      strArray = strArray.map(v => strsObject[v].pop());
      salam.push(strArray);
    }
    for(let i = 0; i < strsLength; i++) {
      const str = strs[i];
      if (temp[0] != null && temp[0] !== str) {
        pushKonToSalam(temp);
        temp = [str];
      } else temp.push(str);
      if (i === strsLength - 1) pushKonToSalam(temp);
    }
    return salam;

  
};

function groupAnagrams2(strs) {
  const stringsMap = new Map();
  strs.forEach(value => {
    const sortedValue = value.split("").sort().join("");
    let strings = [value];
    if (stringsMap.has(sortedValue)) strings.push(...Array.from(stringsMap.get(sortedValue)));
    stringsMap.set(sortedValue, strings);
  });
  return Array.from(stringsMap.values());
}

function getKeyByValue(object, value) { 
  return Object.keys(object).find(key => 
      object[key] === value); 
} 



console.log(groupAnagrams2(["eat","tea","tan","ate","nat","bat"]));