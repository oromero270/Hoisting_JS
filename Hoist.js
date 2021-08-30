// Hoist Assignment : Predict how the code will be read.

//************************************************************** */
//Problem #1
            // console.log(hello);                                   
            // var hello = 'world';  
//**************************************************************** */
//var hello;             *Hoisted var 
//console.log(hello);    *Prints out undefined.
//var hello = 'world.;   *give the value to hello variable. 

// ******************************************************************
//Problem #2
                // var needle = 'haystack';
                // test();
                // function test(){
                //     var needle = 'magnet';
                //     console.log(needle);
                // }
//****************************************************************** */
// var needle;                      *Hoisted var
// function test(){                 *Hoisted function
//         var needle;              *hoisted var in function
//         var needle = 'magnet';   *var needle gets assigned
//         console.log(needle);     *var needle gets called 
// }
// var needle = 'haystack';         *var needle is given new value but never called
//****************************************************************** */
//Problem #3
            // var brendan = 'super cool';
            // function print(){
            //     brendan = 'only okay';
            //     console.log(brendan);
            // }
            // console.log(brendan);

//****************************************************************** */
//var brendan;                      *hoisted var
//function print(){                 *hoisted function
//        brendan = 'only okay';    *not a var
//        console.log(brendan);     *nothing to print
//    }
//var brendan ="super cool";        *brendan given a value
//console.log(brendan)              *var brendan called 
//****************************************************************** */
//Problem #4
            // var food = 'chicken';
            // console.log(food);
            // eat();
            // function eat(){
            //     food = 'half-chicken';
            //     console.log(food);
            //     var food = 'gone';
            // }
//*********************************************************************** */
//var food;                      *Hoisted var
//function eat(){                *Hoisted function
//     var food;                 *Hoisted var in function 
//     food = 'half-chicken';    *var food assigned 'half Chicken'
//     console.log(food);        *console will print food as "half chicken"
//     var food = 'gone';        *var food assigned "gone"
// }
//console.log(food)              *console logs food "chicken";
//eat()                          *console logs eat function "half chicken"
//*********************************************************************** */
//Problem #5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//*********************************************************************** */
//var mean                      *Hoisted var
//console.log(food);            *console logs food which is undefined
//var mean = function() {       *function never called or run
    //var food;
    //food='chicken';
    //console.log(food);
    //var food = 'fish';
    //console.log(food);
//}
//console.log(food)             *food is no
//*********************************************************************** */
//Problem #6
            // console.log(genre);
            // var genre = "disco";
            // rewind();
            // function rewind() {
            //     genre = "rock";
            //     console.log(genre);
            //     var genre = "r&b";
            //     console.log(genre);
            // }
            // console.log(genre);
//*********************************************************************** */
//var genre;                *Hoisted var
// function rewind() {      *Hoisted function
//         var genre;       *hoisted var in function 
//         genre = "rock";  *var set to rock
//         console.log(genre); *Console will print rock
//         var genre = "r&b"; *var changed 
//         console.log(genre); * console will print r&b
//     }
//console.log(genre);           * Prints undefined 
//var genre = "disco";          *var set to disco 
//rewind();                     *console prints rock and r&b
//console.log(genre);           *console prints 'disco'
//*********************************************************************** */
//problem #7
            dojo = "san jose";
            console.log(dojo);
            learn();
            function learn() {
                dojo = "seattle";
                console.log(dojo);
                var dojo = "burbank";
                console.log(dojo);
            }
            console.log(dojo);
//*********************************************************************** */
// function learn() {               *Hoisted function
//          var dojo                *hoisted var in function
//         dojo = "seattle";
//         console.log(dojo);
//         var dojo = "burbank";
//         console.log(dojo);
//     }
// dojo = "san jose";               *var = san jose
// console.log(dojo);               *console prints 'san jose' 
// learn();                         *learn() prints 'seattle' and 'bubank' respectively 
// console.log(dojo);               *console prints 'san jose'





