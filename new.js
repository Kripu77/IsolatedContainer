const prods = [
    "McCafÃ© - Australiano Chai Coffee", 
    "Medium Australiano Chai Coffee McCafÃ©", 
    "Large Australiano Chai Coffee McCafÃ©", 
    "Medium Flat White McCafe", 
    "tea", 
    "Big Mac Meal"

]


function removeValues(prods){

  return  data = prods.map((prod)=>{

    if(prod.includes("McCafÃ© -")){
        return  prod.replace("McCafÃ© -", "")
      }
     
        if(prod.includes("McCafÃ©")){
          return  prod.replace("McCafÃ©", "")
        }
        if(prod.includes("McCafe")){
            return prod.replace("McCafe", "")
        }
       
        else{
            return prod
        }
    })
    
}

console.log(removeValues(prods))