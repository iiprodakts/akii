



class Notifier{
  
  
  constructor(){

      this.events = {}
  
  }

  listen(evt,data){

     this.events[data.component][evt] = data.callback
  }

  emit(evt,component,data = {}){

    for(let evts in self.events){

      if(self.events.hasOwnProperty(component)){
  
          self.events[component][evt](data)
          break;
  
      }
   }

  }



  

}

export default new Notifier()