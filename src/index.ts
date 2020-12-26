import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { Token } from "@lumino/coreutils";

const id = 'provider-test:IFoo';

export const IFoo = new Token<IFoo>(id);

export interface IFoo {}

export class Foo implements IFoo {}

const plugin: JupyterFrontEndPlugin<IFoo> = {
  id,
  autoStart: true,
  requires: [],
  provides: IFoo,
  activate: (app: JupyterFrontEnd): IFoo => {
    const foo = new Foo();
    // Fulfill the plugin contract by returning an `IFoo`.
    return foo;
  }
};

export default plugin;
