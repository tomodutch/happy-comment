// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getCompliment } from './compliments';
type OptionMap = { [key: string]: vscode.DecorationOptions };

const decorationOptions: vscode.DecorationRenderOptions = { after: { margin: '0 0 0 1rem', color: '#7cc36e' } };
const editorDecorations: { [uri: string]: { options: OptionMap, type: vscode.TextEditorDecorationType } } = {

};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.window.onDidChangeActiveTextEditor(() => {
		vscode.window.visibleTextEditors.forEach(editor => showDecorations(editor));
	});
	vscode.workspace.onDidChangeTextDocument(e => {
		const editor = vscode.window.visibleTextEditors.find((ve) => ve.document.uri === e.document.uri);
		showDecorations(editor);
	});

	function showDecorations(editor: vscode.TextEditor | undefined) {
		if (!editor) {
			return;
		}

		const lines = editor.document.getText().split(editor.document.eol === vscode.EndOfLine.CRLF ? "\r\n" : "\n");
		const path = editor.document.fileName;

		if (!editorDecorations[path]) {
			editorDecorations[path] = {
				type: vscode.window.createTextEditorDecorationType(decorationOptions),
				options: {}
			};
		}

		let i = 0;
		while (i < lines.length) {
			const line = (lines[i] || '').trim();
			const key = `${editor.document.uri}.${i}`;
			if (line.length > 2 && line.startsWith('//')) {
				const message = getMessage(line);
				if (!editorDecorations[path].options[key]) {
					editorDecorations[path].options[key] = {
						range: new vscode.Range(new vscode.Position(i, 1024), new vscode.Position(i, 1024)),
						renderOptions: { after: { contentText: message, fontStyle: 'italic' } }
					};
				}
			} else {
				delete editorDecorations[path].options[key];
			}

			i++;
		}
		editor.setDecorations(
			editorDecorations[path].type,
			Object.values(editorDecorations[path].options)
		);
	}

	vscode.window.visibleTextEditors.forEach(e => showDecorations(e));
}

// this method is called when your extension is deactivated
export function deactivate() { }

function getMessage(line: string) {
	return getCompliment();
}
