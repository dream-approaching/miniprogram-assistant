const minappCompDefinition = require('./extends/wjf.minapp-comp-definition-1.0.1/extension')

function activate(context) {
  console.log('miniprogram-assistant is now active!')

  minappCompDefinition.activate(context)

}

function deactivate() {
}


module.exports = {
  activate,
  deactivate,
}
