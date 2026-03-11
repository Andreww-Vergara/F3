function palindromo(a){
  let numero =a;//guarda mi valor original
  let oremun =0;//crear el reverso
  while(a>0){//limite
    let otro=a%10;//último número
    oremun=oremun*10+otro //añadir ultimo numero como primero
    a=(a-a%10)/10//bajar el numero   
  }
   if (numero==oremun){
      console.log("palindromo")
    }else{
      console.log("no es palindromo")
    }
}
let b=121
palindromo(b)