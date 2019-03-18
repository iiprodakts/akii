
import Base from './base'
import Modules from './modules'
import Components from './components'
import * as Activator from './activate'


Base.SUKU.domLoaded(

    Activator.Activator(Base,[Modules,Components])
)
