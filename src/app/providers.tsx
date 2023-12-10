"use client"
import React, {PropsWithChildren} from 'react';
import { Inter } from 'next/font/google'
import {createTheme, MantineProvider} from "@mantine/core";

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
    fontFamily: inter.className
})

const Providers = ({children}: PropsWithChildren) => {
    return (
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    );
};

export default Providers;