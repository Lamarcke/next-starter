"use client"
import React, {useEffect, useState} from 'react';
import {useWindowScroll} from "@mantine/hooks";
import {Box, Transition, Text, Image, useMantineTheme, Stack} from "@mantine/core";
import HomeHero from "@/components/hero/HomeHero";
import useOnMobile from "@/components/general/hooks/useOnMobile";
import HomeCallToAction from "@/components/home/HomeCallToAction";
import HomePartners from "@/components/home/HomePartners";

const HomePage = () => {
    const onMobile = useOnMobile()

    return (
        <Stack className={"mb-32"}>
            <HomeHero />
            <HomeCallToAction />
            <HomePartners />
        </Stack>
    );
};

export default HomePage;