import { Plugin } from '@ckeditor/ckeditor5-core';

export default class TodoListUI extends Plugin {
    static readonly pluginName: 'TodoListUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TodoListUI: TodoListUI;
    }
}
