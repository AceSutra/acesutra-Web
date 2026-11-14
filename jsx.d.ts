// Ambient JSX declaration to satisfy standalone TypeScript language server
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
