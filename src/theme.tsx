import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const lightTheme = createMuiTheme({
    palette:{

    },
    spacing:5,
});

const darkTheme = createMuiTheme({
    palette:{
        type:'dark'
    }
})

export const light = responsiveFontSizes(lightTheme);
export const dark = responsiveFontSizes(darkTheme);