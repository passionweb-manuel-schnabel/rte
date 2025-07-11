import * as Core from '@ckeditor/ckeditor5-core';
import * as UI from '@ckeditor/ckeditor5-ui';

export class CodebreakPlugin extends Core.Plugin {
    static get pluginName() {
        return 'CodebreakPlugin';
    }

    async init() {
        const editor = this.editor;

        editor.model.schema.register('codebreak', {
            isObject: true,
            allowWhere: '$block'
        });

        editor.model.schema.register('codebreakTitle', {
            allowIn: 'codebreak',
            allowContentOf: '$block'
        });
        editor.model.schema.register('codebreakDescription', {
            allowIn: 'codebreak',
            allowContentOf: '$block'
        });
        editor.model.schema.register('codebreakLink', {
            allowIn: 'codebreak',
            allowContentOf: '$block'
        });

        editor.conversion.for('upcast').elementToElement({
            model: 'codebreak',
            view: {
                name: 'codebreak',
                classes: 'codebreak'
            }
        });
        editor.conversion.for('upcast').elementToElement({
            model: 'codebreakTitle',
            view: {
                name: 'p',
                classes: 'codebreak-title'
            }
        });
        editor.conversion.for('upcast').elementToElement({
            model: 'codebreakDescription',
            view: {
                name: 'p',
                classes: 'codebreak-description'
            }
        });
        editor.conversion.for('upcast').elementToElement({
            model: 'codebreakLink',
            view: {
                name: 'p',
                classes: 'codebreak-link'
            }
        });

        editor.conversion.for('dataDowncast').elementToElement({
            model: 'codebreak',
            view: (modelElement, { writer }) => writer.createContainerElement('codebreak', { class: 'codebreak' })
        });
        editor.conversion.for('dataDowncast').elementToElement({
            model: 'codebreakTitle',
            view: (modelElement, { writer }) => writer.createContainerElement('p', { class: 'codebreak-title' })
        });
        editor.conversion.for('dataDowncast').elementToElement({
            model: 'codebreakDescription',
            view: (modelElement, { writer }) => writer.createContainerElement('p', { class: 'codebreak-description' })
        });
        editor.conversion.for('dataDowncast').elementToElement({
            model: 'codebreakLink',
            view: (modelElement, { writer }) => writer.createContainerElement('p', { class: 'codebreak-link' })
        });

        editor.conversion.for('editingDowncast').elementToElement({
            model: 'codebreak',
            view: (modelElement, { writer }) => writer.createContainerElement('codebreak', { class: 'codebreak' })
        });
        editor.conversion.for('editingDowncast').elementToElement({
            model: 'codebreakTitle',
            view: (modelElement, { writer }) => writer.createEditableElement('p', { class: 'codebreak-title' })
        });
        editor.conversion.for('editingDowncast').elementToElement({
            model: 'codebreakDescription',
            view: (modelElement, { writer }) => writer.createEditableElement('p', { class: 'codebreak-description' })
        });
        editor.conversion.for('editingDowncast').elementToElement({
            model: 'codebreakLink',
            view: (modelElement, { writer }) => writer.createEditableElement('p', { class: 'codebreak-link' })
        });

        editor.commands.add('insertCodebreak', new InsertCodebreakCommand( editor ));

        editor.ui.componentFactory.add('codebreak', locale => {
            const view = new UI.ButtonView(locale);
            view.set({
                label: 'Insert Codebreak',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96.1 454.4c0 6.3 1.9 12.5 5.4 17.7l17.1 25.7a32 32 0 0 0 26.6 14.3h61.7a32 32 0 0 0 26.6-14.3l17.1-25.7a32 32 0 0 0 5.4-17.7l0-38.4H96l.1 38.4zM0 176c0 44.4 16.5 84.9 43.6 115.8 16.5 18.9 42.4 58.2 52.2 91.5 0 .3 .1 .5 .1 .8h160.2c0-.3 .1-.5 .1-.8 9.9-33.2 35.7-72.6 52.2-91.5C335.6 260.9 352 220.4 352 176 352 78.6 272.9-.3 175.5 0 73.4 .3 0 83 0 176zm176-80c-44.1 0-80 35.9-80 80 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.8 50.2-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>',
                tooltip: true
            });
            view.bind('isEnabled').to(editor.commands.get('insertCodebreak'));
            view.on('execute', () => {
                editor.execute('insertCodebreak');
            });

            return view;
        });
    }
}

class InsertCodebreakCommand extends Core.Command {
    execute() {
        this.editor.model.change( writer => {
            const codebreakElement = writer.createElement('codebreak');
            const title = writer.createElement('codebreakTitle');
            const description = writer.createElement('codebreakDescription');
            const link = writer.createElement('codebreakLink');

            writer.append(title, codebreakElement);
            writer.append(description, codebreakElement);
            writer.append(link, codebreakElement);

            writer.insertText('Codebreak Title', { bold: true }, title);
            writer.insertText('Description', {}, description);
            writer.insertText('https://www.passionweb.de/codebreak', { linkHref: 'https://www.passionweb.de/codebreak' }, link);
            this.editor.model.insertContent(codebreakElement);
            writer.setSelection( codebreakElement, 'in');
        });
    }

    refresh() {
        const model = this.editor.model;
        const selection = model.document.selection;
        this.isEnabled = !selection.getFirstPosition().findAncestor('codebreak');
    }
}

