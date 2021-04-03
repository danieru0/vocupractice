import 'styled-components';

declare module "styled-components" {
    export interface DefaultTheme {
        fontColor: string;
        fontColorSecondary: string;
        primary: string;
        secondary: string;
        inputBackground: string;
        buttonBorder: string;
        importColor: string;
        exportColor: string;
        categoryBorder: string;
        deleteColor: string;
        checkBackground: string;
        editColor: string;
        fontSizeEm: string;
        primaryFont: string;
        secondaryFont: string;
    }
}