/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-component-page.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../app-layout/app-drawer-layout/app-drawer-layout.d.ts" />
/// <reference path="../app-layout/app-drawer/app-drawer.d.ts" />
/// <reference path="../app-layout/app-header-layout/app-header-layout.d.ts" />
/// <reference path="../app-layout/app-header/app-header.d.ts" />
/// <reference path="../app-layout/app-toolbar/app-toolbar.d.ts" />
/// <reference path="../iron-ajax/iron-ajax.d.ts" />
/// <reference path="../iron-doc-viewer/default-theme.d.ts" />
/// <reference path="../iron-doc-viewer/iron-doc-nav.d.ts" />
/// <reference path="../iron-doc-viewer/iron-doc-viewer.d.ts" />
/// <reference path="../iron-icons/iron-icons.d.ts" />
/// <reference path="../paper-icon-button/paper-icon-button.d.ts" />
/// <reference path="../paper-styles/color.d.ts" />
/// <reference path="../paper-styles/typography.d.ts" />
/// <reference path="../paper-toast/paper-toast.d.ts" />

interface IronComponentPageElement extends Polymer.Element {

  /**
   * URL of the Polymer Analyzer descriptor to fetch and display.
   */
  descriptorUrl: string|null|undefined;

  /**
   * By default all routing is performed using the URL fragment
   * (e.g. `docs.html#/elements/my-element`).
   *
   * If your server supports it and you would like to use the real URL
   * path instead (e.g. `/api/docs/elements/my-element`), set this to
   * the base path where the page is mounted, omitting the trailing
   * slash (e.g. `/api/docs` or *empty string* for the root path).
   */
  baseHref: string|null|undefined;

  /**
   * Instead of displaying items relative to the top level of
   * `descriptor`, start from this namespace.
   */
  rootNamespace: string|null|undefined;

  /**
   * URL prefix for demo iframes.
   */
  demoSrcPrefix: string|null|undefined;
  _loading: boolean|null|undefined;
  _error: object|null|undefined;
  _descriptor: object|null|undefined;
  _path: string|null|undefined;
  _narrow: boolean|null|undefined;
  _title: string|null|undefined;
  _onViewChanged(): void;
  _onNavSelect(): void;
  _descriptorUrlChanged(): void;
  _descriptorChanged(descriptor: any): void;
  _titleChanged(title: any): void;
}

interface HTMLElementTagNameMap {
  "iron-component-page": IronComponentPageElement;
}
