// 58. Length of last word

var lengthOfLastWord = function(s) {

    let trimS, l, i, found=false, subStr
    trimS=s.trim()
    l=trimS.length
    for(i=l-1;i>=0;i--)
        if(trimS[i]==" "){
            found=true
            break
            }
    if(found==true){
        subStr=trimS.substring(i+1)
        return(subStr.length)
    }
    else return(trimS.length)
};
// console.log(lengthOfLastWord("Hello World"))