/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let min, i, check, shortestIndex=0, longestPart, found=true
    const l=strs.length
    min=strs[0].length
    //To find the smallest string
    for(i=1;i<l;i++){
        check=strs[i].length
        if(check<min){
        min=check
        shortestIndex=i
        }       
    }
    // Checking and Progressively decreasing the length of probable common string (min)
    while(min>0){
        found=true
        for(i=0;i<l;i++){        
        part=strs[i].substring(0,min)
        longestPart=strs[shortestIndex].substring(0,min)
        if(part!=longestPart)
        found=false
        }
        if(found==true)
        break
        else 
        min=min-1
    }
    if(min>0)
    return(longestPart)
    else
    return("")
};
// console.log(longestCommonPrefix(["flower","flow","flight"]))