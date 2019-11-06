/**
 * Parses inline style to object.
 *
 * @example
 * import StyleToObject from 'style-to-object';
 * StyleToObject('line-height: 42;');
 *
 */

declare var StyleToObject: (
  style: string,
  iterator?: StyleToObject.Iterator
) => { [name: string]: any } | null;
export = StyleToObject;

declare namespace StyleToObject {
  interface DeclarationPos {
    line: number;
    column: number;
  }

  // declaration is object from module `inline-style-parser`
  interface Declaration {
    type: string;
    property: string;
    value: string;
    position: {
      start: DeclarationPos;
      end: DeclarationPos;
      source: any;
    };
  }

  type Iterator = (
    property: string,
    value: string,
    declaration: Declaration
  ) => void;
}
