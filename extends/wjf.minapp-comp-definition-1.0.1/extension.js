const vscode = require('vscode')
const wxmlCompletionItemProvider = require('./util/wxmlCompletionItemProvider')
const wxmlDefinitionProvider = require('./util/wxmlDefinitionProvider')
const jsonDefinitionProvider = require('./util/jsonDefinitionProvider')
const documentSelector = [
  { scheme: 'file', language: 'wxml', pattern: '**/*.wxml' },
]
const documentSelectorJson = [
  { scheme: 'file', language: 'json', pattern: '**/*.json' },
]

function activate(context) {
  // 注册跳转到定义
  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider(
      documentSelector,
      wxmlDefinitionProvider,
    ),
  )

  // 注册json跳转到定义
  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider(
      documentSelectorJson,
      jsonDefinitionProvider,
    ),
  )

  // 注册自动补全提示，只有当按下空格时才触发
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      documentSelector,
      wxmlCompletionItemProvider,
      ...[' '],
    ),
  )
}

module.exports = {
  activate,
}
