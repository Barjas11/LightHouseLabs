//Hungry should be bolean value
//availableTime should be a int number 


function whatToDoForLunch(hungry, availableTime){


  if(hungry == true ){
    if(availableTime < 20){
        console.log("pick something up and eat in back in the Lab or in the kitchen, where you can get to know your fellow classmates.")		
    }
    else if(availableTime >= 20 && availableTime < 30 ){
         console.log(" you deserve a break and could try a place in Gastown.")	
    }
      else if(availableTime > 30 ){
         console.log("this is a bootcamp after all and you should probably reconsider.")	
    }
  }
  else{
  console.log("Wait Until You Are Hungry")
  }
  
  
  }
  
  whatToDoForLunch(true,19)