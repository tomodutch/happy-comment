// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import compliments from './compliments';

const decorationType = vscode.window.createTextEditorDecorationType({ after: { margin: '0 0 0 1rem', color: '#7cc36e' } });

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.window.onDidChangeActiveTextEditor(ev => {
		showDecorations();
	});

	vscode.workspace.onDidChangeTextDocument(ev => {
		showDecorations();
	});
	const decorations: { [key: string]: vscode.DecorationOptions } = {};
	function showDecorations() {
		vscode.window.visibleTextEditors.forEach((e) => {
			const lines = e.document.getText().split(e.document.eol === vscode.EndOfLine.CRLF ? '\n\r' : '\n');
			let i = 0;
			while (i < lines.length) {
				const line = (lines[i] || '').trim();
				const key = `${e.document.fileName}.${i}`;
				if (line.length > 2 && line.startsWith('//')) {
					const message = getMessage(line);
					if (!decorations[key]) {
						decorations[key] = {
							range: new vscode.Range(new vscode.Position(i, 1024), new vscode.Position(i, 1024)),
							renderOptions: { after: { contentText: message, fontStyle: 'italic' } }
						};
					}
				} else if (decorations[key]){
					delete decorations[key];
				}

				i++;
			}
			e.setDecorations(
				decorationType,
				Object.values(decorations)
			);
		});
	}
}

// this method is called when your extension is deactivated
export function deactivate() { }

function getMessage(line: string) {
	const compliment = randomElement(compliments);
	if (line.endsWith('.')) {
		return compliment;
	}

	return `and ${compliment.charAt(0).toLowerCase() + compliment.slice(1)}`;
}

// https://stackoverflow.com/a/5915122
function randomElement(items: any[]) {
	return items[Math.floor(Math.random() * items.length)];
}