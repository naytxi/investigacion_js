//example of let and var

let numero;
numero=456;

//alert(numero)
console.log(numero);

var x = 10;

let y = 80;

 //alert("1-the value of x is.."+x)

 //alert("2-the value of y is.."+y)

console.log(x , y );


//now, change these variables inside the block:

  if (1==1) {

   var x = 20;

   let y =30;

    //alert("3-inside the bracket, the value of  x is.."+x)

    //alert("4-inside the bracket , the value of  y is.."+y)

console.log(x , y);


}

//alert("5-outside the bracket, the value of x is.."+x)

//alert("6-outside the bracket,the vale of y is.."+y)

//example with data types
               
           let name="alicia" // de cadena o string
           let tieneGafas=true; // bouleano
           let edad=29;  //integer
           let precio=19.89 //float
           let house=null;
           let euros=undefined;
            alert(name+" "+tieneGafas+" "+edad+" "+precio+" "+house+" "+euros)




//example of const
           
    

           const iva=12;
           
           alert("El IVA es del ..."+iva+" por ciento")