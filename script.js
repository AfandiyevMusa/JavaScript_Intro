//Task1

    let num = prompt("Enter num: ");

    if(num % 3 == 0 && num % 7 != 0){
        console.log("num yalnizca 3e bolunur");
    }
    else if(num % 7 == 0 && num % 3 != 0){
        console.log("num yalnizca 7e bolunur");
    }
    else if(num % 3 == 0 && num % 7 == 0){
        console.log("num hem 3e, hem de 7e bolunur");
    }else{
        console.log("num ne 7e ne de 3e bolunur");
    }


//Task2

    // let n = prompt("enter n: ");
    // let m = prompt("enter m: ");
    // let sum = 0;


    // if(n % 2 == 0 && m % 2 == 0){
    //     sum = Number(n) + Number(m);
    //     console.log(sum);
    // }
    // else if(n % 2 == 0 && m % 2 != 0){
    //     console.log("m cut deyil");
    // }
    // else if(n % 2 != 0 && m % 2 == 0){
    //     console.log("n cut deyil");
    // }else{
    //     console.log("hec biri cut deyil");
    // }


//Task3

    // let n = prompt("Enter n: ");
    // let m = prompt("Enter m: ");
    // let count = 0;
    
    // if(n >= m){
    //     console.log("n ededi m'den boyukdur ve ya beraberdir, sertde problem var");
    // }else{
    //     while (n < m) {
    //         if(n % 2 != 0){
    //             count++;
    //         }
    //         n++;
    //     }
    //     console.log(count);
    // }


//Task4

    // let n = prompt("Enter n: ");
    // let m = prompt("Enter m: ");
    // let sum = 0;
    
    // if(n >= m){
    //     console.log("n ededi m'den boyukdur ve ya beraberdir, sertde problem var");
    // }else{
    //     while (n < m) {
    //         if(n % 2 != 0){
    //             sum+=n;
    //         }
    //         n++;
    //     }
    //     console.log(sum);
    // }

//Task5

    // let n = prompt("Enter n: ");
    // let m = prompt("Enter m: ");
    // let str = " ";

    // if(n >= m){
    //     console.log("n ededi m'den boyukdur ve ya beraberdir, sertde problem var");
    // }else{
    //     while (n < m) {
    //         if(n % 2 != 0){ 
    //             str += (Number(n) + " ");
    //             n++;
    //         }
    //     }
    //     console.log(str);
    // }