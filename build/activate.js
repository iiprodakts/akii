"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Activator = void 0;

var Activator = function Activator(dependencies, libs) {
  // console.log('The value of the window.object')
  // console.log(window.location)
  // console.log(window.history)
  // console.log(window.document)
  // console.log(window.document.referrer)
  // console.log(window.sana)
  // console.log(this)
  // console.log(window.SUKU)
  // console.log(Object.getOwnPropertyNames(window))
  var core = new dependencies.CORE(dependencies.SUKU);
  var sandbox = new dependencies.SANDBOX(core); // console.log('The core before modules')
  // console.log(sandbox.sb_jsToJson(core))

  libs.forEach(function (lib) {
    for (var moco in lib) {
      // console.log('Inside activate')
      // console.log(moco)
      var moduId = moco.toLowerCase();
      var v = dependencies.SUKU.getAllBy_attribute('data-' + moduId); // console.log(`Currently executing module: ${moco}`)

      if (v.length > 0) {
        // console.log('Executing the module with view')
        var attribs = dependencies.SUKU.get_element_attributes(v[0]);
        var modInstId = '';

        if (attribs.length > 0) {
          for (var a = 0; a < attribs.length; a++) {
            var attName = attribs[a].name;

            if (attName === 'data-' + moduId) {
              var attValue = attribs[a].value;
              modInstId = attValue;
              break;
            }
          }
        } // End of check attributes length if statement


        core.createModule(new lib[moco](sandbox.create(moduId, modInstId)), moduId, modInstId); // console.log(`Currently starting module: ${moco}`)

        core.startModule(moduId, modInstId); // console.log('Dependicies')
        // console.log(typeof dependencies.core)
        // // let moduId = mod.name.toLowerCase();
      } else {
        var _modInstId = moduId; // console.log('Executing module without view')

        core.createModule(new lib[moco](sandbox.create(moduId, null)), moduId, _modInstId); // console.log(`Currently starting module: ${moco}`)

        core.startModule(moduId, _modInstId); // console.log('Dependicies')
        // console.log(typeof dependencies.core)
        // // let moduId = mod.name.toLowerCase();
      }
    }
  });
};

exports.Activator = Activator;