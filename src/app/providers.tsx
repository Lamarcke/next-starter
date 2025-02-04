"use client"
import React, {PropsWithChildren} from 'react';
import {Inter, Montserrat, Instrument_Sans} from 'next/font/google'
import {createTheme, DEFAULT_THEME, MantineProvider, mergeMantineTheme} from "@mantine/core";

const instrumentSans = Instrument_Sans({
    subsets: ["latin"]
})

const montserrat = Montserrat({
    subsets: ["latin"],
})

const theme = createTheme({
    fontFamily: instrumentSans.style.fontFamily,
})

const Providers = ({children}: PropsWithChildren) => {
    return (
        <MantineProvider theme={mergeMantineTheme(DEFAULT_THEME, theme)}>
            {children}
        </MantineProvider>
    );
};

export default Providers;