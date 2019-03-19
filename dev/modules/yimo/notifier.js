



class Notifier{
  
  
  constructor(){

      this.events = {}
  
  }

  listen(evt,callback){

      
     this.events[evt] = callback

   


  }

  emit(evt,data = {}){

     if(this.events.hasOwnProperty(evt)){

       this.events[evt](data)

     }

  }



  

}

export default new Notifier()