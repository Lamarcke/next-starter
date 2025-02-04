import React from 'react';
import {Stack, Title, Text, Image} from "@mantine/core";
import Link from "next/link";

const HomeCallToAction = () => {
    return (
        <Stack className={"w-full items-center text-center"}>
            <Title size={"h1"}>
                ALAVANQUE SUA PRODUÇÃO E <span className={"font-bold text-green-800"}>PRODUTIVIDADE</span>
            </Title>

            <Text className={"text-green-700"}>O maior HUB do Agro brasileiro.</Text>
            <Link href={""}>
                <Image src={"/img/botao-whatsapp.png"} className={"w-48 lg:w-64"}/>
            </Link>
        </Stack>
    );
};

export default HomeCallToAction;