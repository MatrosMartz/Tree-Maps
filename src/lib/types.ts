export type State = 'none' | 'opts' | 'more' | 'add' | 'prof';

export type Color = 'green' | 'orange' | 'red' | 'blue';

export interface Options {
    theme: 'darkmode' | 'lightmode';
    animation: boolean;
    lang: 'en' | 'es';
    colorSchema: Color;
}