

export const init = function(){
    
    var self = this
    

    // console.log('The list')
    // console.log(this.list)
    // this.list.build(self)
    this.listens()
    this.mergeComponents =  [

         
        'header',
        'routes',
        'footer'
        // 'footer'
       
        // 'footer',
        // 'todo',
        // 'about'
    ]
    this.emit({type: 'merge-component',data: {

        components: self.mergeComponents


    }})

   
   //  this.emit({type:'component-mount',data: this.build})
   //  this.emit({type:'get-component-name',data: ''})
    
}

export const start = function(){

    const self = this
    let newA = []

    self.mergeComponents.forEach((va,i) => {
        
        console.log('The va')
        console.log(va)

        self.components.forEach((v,vi)=>{

            if(v.name === va){

                newA.push(v)
            }
        })
    });

    console.log('The value of new Array now')
    console.log(newA)
    console.log('The value of old Array')
    console.log(this.mergeComponents)

    newA.forEach((comp)=>{


            comp.component.start()
    })

    


 
}

export const listens = function(){
   
   
   var sb = this.sb 
   // var name = 'render-component-'+this.componentname
   sb.sb_notifyListen({

        'component-merged': this.handleComponentMerged.bind(this)
        
   },sb.moduleMeta.moduleId,sb.moduleMeta.modInstId)
}

export const emit = function(eNotifs){
   
        console.log('The value of this in emit')
         var sb = this.sb 
         console.log(eNotifs)
   
       sb.sb_notifyEvent({
       
             type: eNotifs.type,
             data: eNotifs.data
       
        })
       

}

export const handleComponentMerged = function(data){

    this.componentMerged(data)
    
}
export const componentMerged = function(data){

    const self = this
    this.components.push({
        component: data.component,
        name: data.component.constructor.name.toLowerCase()
    })

    if(self.components.length === self.mergeComponents.length){

        self.start()

    }

    
    // console.log('The components of the master component')
    // console.log(this.components)

}

