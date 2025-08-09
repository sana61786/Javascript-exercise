// javascript exercise chapter 1 to 10
// chapter 1
// Q1
alert('Error!please enter your valid password')
// Q2
alert('welcome to js land happy codding')
// Q3
alert('Welcome js Land')
// Q4
alert('happy codding')
// Q5
alert('Hello...i can learn JS thought My web browser console')

//  chapter 2
    // Q1
        var username;
   // Q2
        var myname = "sana naz"
   // Q3
       var message ="hello world"
        alert(message)
     // Q4
        var studentname ="sara khan"
        alert(studentname)
        var studentage ="20"
        alert(studentage)
        var studnetcertificate ="certified mobile appplication development"
        alert(studnetcertificate)
        // Q5
        var pizza ="PIZZA \n PIZZ \n PIZ \n PI \n A"
        alert(pizza)
        // Q6
        var email ="myemail@gamil.com"
        alert("my email address " +email)
        // Q7
        var book ="A smart way to learn javascript"
        alert("im trying to learn from the book a smart way to learn javascript")
        // Q8
        document.write("yah! i can write HTML contant through javascript")
        // Q9
        var store = "▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬"
        alert(store)
        document.write("▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬")

        // chapter 3
        // Q1
        var age = 21
        alert("age")
        // Q2
        var visitor = 14
        alert("you have visited this site" + visitor + "times")
        // Q3
        var birthyear = 2005
        document.write(" my birth is " + birthyear) 
        document.write("deta type of my declared variable is number <br>")
        // Q4
        var visitorename = "sara khan"
        var productTitle ="T-shirt"
        var order = 5
        document.write("sarakhan + ordered + 5 T-shirts + XYZ clothing store")

    //   CHAPTER 4
// Q1
var var1;
var var2;
var var3;
 // Q2
5 legal variables
var _myName;
var  $num1;
var myVar;
var prices2;
var $_;
// Q3
 5 illegal variables
var 1stletter;
var first Name;
var my@variable;
var my#num;

document.write("<h1>Rules for naming JS variables</h1>")
document.write("<p>Variables name can only contain numbers, $ and _. for example : $my_1stVariable </br> Variable must begin with a letter, $ or _. for eg: $name, _name or name.</br> Variable names are case sensitive.</br> Variable names should not be JS keywords</p>")

   // chapter 5
   // Q1  and Q2
       var num1 = 3
        var num2 = 5
        var sum = num1 + num2    // 8
        console.log(sum)
        
        var num1 = 3
        var num2 = 5
        var sum = num1 - num2    // 2
        console.log(sum)
       
        var num1 = 3
        var num2 = 5
        var sum = num1 * num2    // 15
        console.log(sum)
   
        var num1 = 3
        var num2 = 5
        var sum = num1 / num2      // 0.6
        console.log(sum)
       
        var num = 3
        var num2 = 5
        var sum = num1 % num2    // 2
        console.log(sum)
      // Q3
        var number = 7
        console.log(++number)
        document.write("value after declaration is undefined"  + "<br>")
        document.write("initial value is 7 /n" + "<br>")
        document.write("value after increment is" + number + "<br>")
        
        var num1= 8
        var result = (num1 + 7)  //15
        console.log(result)
         console.log(--num1)
         document.write("value after addition is" + result + "<br>") //15
         document.write("value after decremnet is" + num1 + "<br>")  // 7
        console.log(result % 3)
        document.write("reminder is 0")
      // Q4
        var ticketprice = 100
        var totalprice = (ticketprice * 5)  //500
        console.log(totalprice)
        document.write("total cost to buy 5 tickets to a movie is"  +  totalprice)
        
        // Q5
        document.write("table of 4 <br>")
        document.write("2 * 1 = 2 <br>")
        document.write("2 * 2 = 4 <br>")
        document.write("2 * 3 = 6 <br>")
        document.write("2 * 4 = 8 <br>")
        document.write("2 * 5 = 10 <br>")
        document.write("2 * 6 = 12 <br>")
        document.write("2 * 7 = 14 <br>")
        document.write("2 * 8 = 16 <br>")
        document.write("2 * 9 = 18 <br>")
        document.write("2 * 10 = 20 <br>")
        // Q7
        var itemprice1 = 200
        var item1qty = 4
         var result = (itemprice1 * item1qty) 
         console.log(result)   //800
        
        var itmeprice2 = 400
        var item2qty = 3
        var output = ( itmeprice2 * item2qty) 
         console.log(output)   //1200
        
        var shopping_charges = 200
        
        document.write("item1 price is " + itemprice1   + "<br>")
        document.write("item1 qty is " + item1qty  + "<br>" )
        document.write("item2 price is  " + itmeprice2  + "<br>" )
        document.write("item2 qty is  " + item2qty  + "<br>")
        document.write(" shopping_charges is " +  shopping_charges  + "<br>")
        document.write("your total bill is 2200"  + "<br>")
        // Q8
        var totalmarks = 1000
        var obtainmarks = 800
        var percentage = (obtainmarks/ totalmarks ) * 100
        console.log(percentage)   //80%
        document.write(" <h1>marksheet</h1>   ")
        document.write("total marks "  + totalmarks + "<br>")
        document.write("obtainmarks "  + obtainmarks + "<br>")
        document.write("percentage "  + percentage + "%" + "<br>")
        // Q9
        var totalpkr = (10 * 104.80) + ( 25 * 28)
        console.log(totalpkr) //1748
        document.write("total currency in PKR is" + totalpkr + "<br>")
        // Q10 
        var number = 5
        number = number + 5 * 10    / 2
        console.log(number)         //30
        // Q11
        var currentyear = 2025
        var birthyear = 2004
        var age = (currentyear - birthyear)   //21
        var age2 = (age -1)
        console.log(age2)
        document.write("<h1>age calculator</h1>")
        document.write("currentyear is" + currentyear + "<br>")
        document.write("birthyear is" + birthyear + "<br>")
        document.write("your age is" + age + "<br>")
        // Q13
        var snack = ("chocolate chip")
        var age = (20)
        var maximumage = (60)
        var snackperday = (3)
        var yearsremaning = (maximumage-age)
        var daysremaning = (yearsremaning * 365)
        var totalsnacks = (daysremaning * snackperday)
        console.log(totalsnacks)
        
        document.write(" <h1>the lifetime supply calculator</h1> <br> ")
        document.write("favourute snack :" + snack + "<br>")
        document.write("current age :" + age + "<br>")
        document.write("maximum age :" + maximumage + "<br>")
        document.write("amount of snack per day :" + snackperday + "<br>")
        document.write("you will need 43800 chocolotechips to last you until the ripe old age of 60" + "<br>")

        //chapter 6
    // Q1
        var a = 10
        ++a   //value 11
        a++   //value is 12
        --a   //value is 11
        a--   //value is 10
        
        document.write("the value of a is 10 <br>" )
        document.write("the value of a is 11 <br>")
        document.write("the value of a is 12 <br>")
        document.write("the value of a is 11 <br> ")
        document.write("the value of a is 10 <br>")
        
        // Q2
        var a = 2    //1
        var b = 1    //0
        var result = --a - --b + ++b + b--
        console.log(result)
        document.write(" a is 1 <br>")
        document.write(" b is 1 <br>")
        document.write(" reesult is 3 <br>") 
        
        var username = prompt("Enter your name")
        alert("welcome" + username)
        
        var typeNumber =prompt("Enter number between 1-10")
         if (){
        
        }
        
        // chapter 9-10
        // Q1
        var cityname = prompt("enter city name")
        if (cityname === "karachi"){
             alert("welcome to tha city of karachi")  
        }else {
        alert("welcome")
        }
        // Q2
        var gender = prompt("Please enter your gender")
        if (gender === "male"){
            alert("good morning sir")
        }else if ("gender" === "female"){
            alert("good morning mam")
        }else {
            alert("plz type your gender")
        }
      // Q3
        var color = prompt("enter traffic signal color")
        if (color){
            if (color==="red"){
                alert("must stop")
            }else if (color === "green"){
                alert("move now")
            }else if (color === "yellow"){
                alert("Ready to Move")
            }else {
                alert("Invalid color entered")
            } 
        }else {
            alert("You did not enter any color")
        }
        // Q4
        var fuel = +prompt("Check fuel in liters")
        if (fuel <=0.25 ){
            alert("plz refill the fuel in your car")
        }else {
            alert("You have enough fuel")
        }
       // Q5
        var a = 4
        if (++a === 5){
            alert("given condition for variable a is true")
        }
         var b = 82
         if (b++ === 83)
         {
            alert("condition is false")
         }
         var c = 12
         if (c++ === 13){
            alert("condition is false")
         }
         var c = 12
         if (c === 13)
         {
            alert("condition is false")
         }
         var c = 12
         if (++c < 14){
            alert("condition is true")
         }
         var  c = 12
         if(c === 14){
            alert("condition is false")
         }
        var materialcost = 20000
        var laborcost = 2000
        var totalcost = (materialcost+ laborcost) //2200
        if (totalcost===materialcost+ laborcost){
            alert("condition is true")
        }
        if (true){
            alert("true")
        }
        if (false){
            alert("false")
        }
        if ("car" < "cat"){
            alert("true")
        }
       // Q6
        var sub1 = +prompt("Enter marks of subject english:");
        var sub2 = +prompt("Enter marks of subject math:");
        var sub3 = +prompt("Enter marks of subject urdu:");
        var totalMarks = +prompt("Enter total marks:");

        var obtainedMarks = sub1 + sub2 + sub3;
        var percentage = (obtainedMarks / totalMarks) * 100;

        var grade, remarks;
        if (percentage >= 80) {
            grade = "A-one";
            remarks = "Excellent";
        }
        else if (percentage >= 70) {
            grade = "A";
            remarks = "Good";
        }
        else if (percentage >= 60) {
            grade = "B";
            remarks = "Fair";
        } else {
            grade = "Fail";
            remarks = "Sorry";
        }
        document.write("<h1>Marksheet</h1>");
        document.write("Total Marks: " + totalMarks + "<br>");
        document.write("Marks Obtained: " + obtainedMarks + "<br>");
        document.write("Percentage: " + percentage + "%<br>");
        document.write("Grade: " + grade + "<br>");
        document.write("Remarks: " + remarks + "<br>");
       // Q7
       var secretnumber = +prompt("guess a secret number 1-10")
         var number = 6
if (secretnumber===number){
    alert("Bingo correct answer")
}else if (secretnumber===number + 1 ||secretnumber===number - 1 ){
    alert("close enough to the correct answer")
}else {
    alert("try again")
} 
  // Q8

 var number = +prompt("Enter a number to check if it is divisible by 3:");

if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}
// Q9
var number = +prompt("Enter a number to check if it is even or odd:");
if (number % 2 === 0) {
    alert(number + " is even.");
} else {
    alert(number + " is odd.");
}
// Q10
var temp = +prompt("enter temprature")
if (temp <=70){
    if(temp > 40 ){
        alert("it is to hotoutside")
    }else if (temp > 30){
        alert("the weather today is normal")
    }else if(temp > 20){
        alert("todays weather is cool")
    }else if(temp > 10){
        alert("OMG today weather is very cool")
    }
}else {
    alert("enter valid temprature")
}
