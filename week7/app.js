//Q1.  reversing the number 


function reverseNumber() {
    var n = prompt("Enter the number :->", " ");
    // convert the number to the string 
    n = n + "";



    var add = n.split("").reverse().join("");
    document.getElementById("reverse").innerHTML = "Reverse number is : -> " + add;
    return add;
}

// console.log(Number(reverseNumber()));


//-------------------------------   Q2. palindrome or not -------------- 



function validate_Palindrome() {

    document.getElementById("main").innerHTML = "Palindrome or Not  ";

    var enter_string = prompt("Enter the string :->", " ");

    var str = enter_string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    if (str === "") {
        console.log("Nothing found!");
        return false;
    }
    if ((str.length) % 2 === 0) {
        ccount = (str.length) / 2;
    } else {
        if (str.length === 1) {
            console.log("Entry is a palindrome.");

            return true;
        } else {
            ccount = (str.length - 1) / 2;
        }
    }
    for (var x = 0; x < ccount; x++) {
        if (str[x] != str.slice(-1 - x)[0]) {
            console.log("Entry is not a palindrome.");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    document.getElementById("reverse").innerHTML = "---> Enter String is Palindrome <--- ";

    return true;
}
// validate_Palindrome();



//-------------------------------   Q3. All combination of String -------------- 


// function all_Combinations() {

//     document.getElementById("main").innerHTML = "---> Generating All combinations OF Dog <---  ";

//     var enter_string = prompt("Enter the string :->", " ");
//     var array1 = [];
//     for (var x = 0, y = 1; x < enter_string.length; x++, y++) {
//         array1[x] = enter_string.substring(x, y);
//     }
//     var combi = [];
//     var temp = "";
//     var slent = Math.pow(2, array1.length);

//     for (var i = 0; i < slent; i++) {
//         temp = "";
//         for (var j = 0; j < array1.length; j++) {
//             if ((i & Math.pow(2, j))) {
//                 temp += array1[j];
//             }
//         }
//         if (temp !== "") {
//             combi.push(temp);
//         }
//     }
//     console.log(combi.join("\n"));
//     document.getElementById("reverse").innerHTML = "---> " + combi.join("\n");

// }

// all_Combinations();










//-------------------------------   Q4. Sorting the string -------------- 




function sorting_str() {
    document.getElementById("main").innerHTML = "---> Sorting the  String <---  ";
    var enter_string = prompt("Enter the String ", " ");
    document.getElementById("reverse").innerHTML = " Sorted String is    ---> " + enter_string.split('').sort().join('') + " : <--- ";
    return enter_string.split('').sort().join('');

}
// console.log(sorting_str());


































//-------------------------------   Q5. Upper  Case  -------------- 


function title_Case() {
    document.getElementById("main").innerHTML = "---> Title Case  <---  ";
    var enter_string = prompt("Enter the String ", " ");
    var array1 = enter_string.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }

    document.getElementById("reverse").innerHTML = " ---> " + newarray1.join(' ') + " : <--- ";

    return newarray1.join(' ');
}
// console.log(title_Case());


















//-------------------------------   Q6. Longest Word in given  String   -------------- 

function longest_Word() {
    document.getElementById("main").innerHTML = "---> Longest Word in the String  <---  ";
    var enter_string = prompt("Enter the String ", " ");
    var array1 = enter_string.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    document.getElementById("reverse").innerHTML = " ---> " + result + " : <--- ";

    return result;
}
// console.log(longest_Word());





















//-------------------------------   Q7. Vowels count   -------------- 

function vowels_count() {

    document.getElementById("main").innerHTML = "--->Total vowels are    <---  ";
    var enter_string = prompt("Enter the String ", " ");
    var vowels = 'aeiouAEIOU';
    var count = 0;

    for (var x = 0; x < enter_string.length; x++) {
        if (vowels.indexOf(enter_string[x]) !== -1) {
            count += 1;
        }

    }

    document.getElementById("reverse").innerHTML = " ---> " + count + " : <--- ";

    return count;
}
// console.log(vowels_count());













//-------------------------------   Q8. Prime Or Not    -------------- 

function prime_Numbers() {
    var n = prompt("Enter the number ", " ");
    document.getElementById("main").innerHTML = "--->  " + n + " Prime Or Not   <---  ";
    if (n === 1) {
        document.getElementById("reverse").innerHTML = " ---> " + false + " : <--- ";
        return false;
    }
    else if (n === 2) {
        document.getElementById("reverse").innerHTML = " ---> " + true + " : <--- ";
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                document.getElementById("reverse").innerHTML = " ---> " + false + " : <--- ";

                return false;
            }
        }
        document.getElementById("reverse").innerHTML = " ---> " + true + " : <--- ";

        return true;
    }
}

// console.log(prime_Numbers());














//-------------------------------   Q9. Detect The Data type     -------------- 



function check_type(data) {

    document.getElementById("main").innerHTML = "---> Detect the Data Type   <---  ";
    // var data = prompt("Enter the value ", " ");

    var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

    if (typeof data === "object" || typeof data === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (data instanceof dtypes[x]) {
                return dtypes[x];
            }
        }
    }
    document.getElementById("reverse").innerHTML = " ---> " + typeof data + " : <--- ";

    return typeof data;
}
// console.log(check_type(9));
// console.log(check_type(true));












//-------------------------------   Q10. identify matrix    -------------- 


function identify_Matrix() {
    document.getElementById("main").innerHTML = "---> Identify Matrix   <---  ";
    var n = parseInt(prompt("Enter the number ", " "));
    var i;
    var j;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {
                // document.getElementById("reverse").innerHTML = " ---> " + 1;

                console.log(' 1 ');
            }

            else {
                // document.getElementById("reverse").innerHTML = " ---> " + 0;

                console.log(' 0 ');

            }
        }
        console.log('----------');
    }
}
// identify_Matrix();














//-------------------------------   Q11. Finding second lowest and greatest numbers from and array    -------------- 


function find_Number(arr_num) {
    document.getElementById("main").innerHTML = "---> Finding second lowest and greatest numbers from and array  <---  ";
    arr_num.sort(function (x, y) {
        return x - y;
    });
    var uniqa = [arr_num[0]];
    var result = [];

    for (var j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    document.getElementById("reverse").innerHTML = " ---> " + result.join(',') + " <--- ";

    return result.join(',');
}

// console.log(find_Number([11, 52, 73, 4,9]));









//-------------------------------   Q12. Finding the Perfect Number    -------------- 



function perfect_num() {

    var n = parseInt( prompt("Enter the number ", " "));
    document.getElementById("main").innerHTML = "--->"+n+" is  Perfect Number Or Not  <---  ";
    var t = 0;
    for (var i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            t+= i;
        }
    }

    if (t === n && t !== 0) {
        document.getElementById("reverse").innerHTML = " ---> Perfect Number  <--- ";

        console.log(" Perfect Number ");
    }
    else {
        document.getElementById("reverse").innerHTML = " --->  Not Perfect Number  <--- ";

        console.log(" Not Perfect Number ");
    }
}
// perfect_num();






















//-------------------------------   Q13. Compute the factors of a positive integer    -------------- 


function Compute_factors()
{
    var n = parseInt( prompt("Enter the number ", " "));
    document.getElementById("main").innerHTML = "---> Compute the factors of a positive integer  <---  ";
    
 var factors_arr = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
    factors_arr.push(i);
   if (n / i !== i)
   factors_arr.push(n / i);
  }
  factors_arr.sort(function(x, y)
   {
     return x - y;});  // numeric sort

     document.getElementById("reverse").innerHTML = " --->"+ factors_arr +" <--- ";

     return factors_arr;
    }
// console.log(Compute_factors());  















//-------------------------------   Q14.    -------------- 

function convert_coins(amount, coins) 
{

    // document.getElementById("main").innerHTML = "---> convert an amount to coins  <---  ";
    // var amount = parseInt(prompt("Enter the value ", " "));
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( convert_coins(left, coins) );
        } 
      else
        {
         coins.shift();
        // document.getElementById("reverse").innerHTML = " --->  "+convert_coins(amount, coins)+"  <--- ";

         return convert_coins(amount, coins);
        }
    }
} 
// console.log(convert_coins(34, [25, 10, 5, 2,1]));















//-------------------------------   Q15.    -------------- 

function Exponential()
{

     document.getElementById("main").innerHTML = "---> compute the value of b^n   <---  ";
    var b = parseInt(prompt("Enter the value ", " "));
    var n = parseInt(prompt("Enter the value ", " "));
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        document.getElementById("reverse").innerHTML = " --->  "+ans+"  <--- ";

        return ans;
}
// console.log(Exponential());
















//-------------------------------   Q16.    -------------- 


function extract_Unique_Char()
{

    document.getElementById("main").innerHTML = "---> Extract unique characters from a string   <---  ";
    var enter_string = (prompt("Enter the value ", " "));
    var str=enter_string;
    var s="";
    for (var x=0;x < str.length;x++)
    {
        
        if(s.indexOf(str.charAt(x))==-1)
        {
  s += str[x];  
  
}
}
document.getElementById("reverse").innerHTML = " --->  "+s+"  <--- ";

return s;  
}  
// console.log(extract_Unique_Char(""));












//-------------------------------   Q17.    -------------- 
function char_Occurences () {
    document.getElementById("main").innerHTML = "---> number of occurrences    <---  ";
    var enter_string = (prompt("Enter the value ", " "));

    var uchars = {};
    enter_string.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
// document.getElementById("reverse").innerHTML = " --->  "+uchars+"  <--- ";

    return uchars;
    }
    console.log(char_Occurences());
    // console.log(char_Occurences("The quick brown fox jumps over the lazy dog"));
    