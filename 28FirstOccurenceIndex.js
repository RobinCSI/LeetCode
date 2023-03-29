/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i, found=false
    const l2=haystack.length, l1=needle.length
    const l=l2-l1
    for(i=0;i<=l;i++){
        if(needle[0]==haystack[i]){
            subStr=haystack.substring(i,i+l1)
            if(subStr==needle){
                found=true
                break
            }
        }
    }
    if(found==true)
    return(i)
    else return(-1)
}
// console.log(strStr("sadbutsad","sad"))