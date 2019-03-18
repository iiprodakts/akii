
import CORE from "./base/core"
import SANDBOX from "./base/sandbox"
import SUKU from "./vendor/suku"

 


class Base{

    constructor(){

        this.CORE = CORE,
        this.SANDBOX = SANDBOX,
        this.SUKU = SUKU
    }
    
}

export default new Base()