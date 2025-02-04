import React from 'react';
import {Box, Card, Flex, Image, Stack, Text, Title} from "@mantine/core";
import {Carousel} from "@mantine/carousel";

interface Partner {
    imageSrc: string;
    title: string;
    description: string;
}

const PARTNERS: Partner[] = [
    {
        imageSrc: "/icon/ipec-venda-consultiva.png",
        title: "Venda Consultiva",
        description: "Trown Nutricion | Alta Genetics | Globalgen | Rehagro"
    },
    {
        imageSrc: "/icon/confinamento-fazenda.png",
        title: "Confinamento Bovino",
        description: "Mais de 1,2 milhões de cabeças confinadas | Agricultura"
    }
]

const HomePartners = () => {

    return (
        <Stack>
            <Title size={"h3"}>Nossos parceiros</Title>
            <Carousel align={"start"} slideGap={"sm"} slideSize={{
                base: "30%",
                lg: "15%"
            }} dragFree>

                {PARTNERS.map((partner) => {
                    return <Carousel.Slide key={partner.title}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder
                              className={"w-48 lg:w-56"}>
                            <Card.Section>
                                <Flex className={"justify-center"}>
                                    <Image src={partner.imageSrc} className={"w-28"}/>
                                </Flex>
                            </Card.Section>
                            <Card.Section>
                                <Text className={"text-center font-bold text-green-700"}>{partner.title}</Text>
                            </Card.Section>
                            <Card.Section>
                                <Text className={"text-center text-green-600"}>{partner.description}</Text>
                            </Card.Section>
                        </Card></Carousel.Slide>
                })}
            </Carousel>
        </Stack>
    );
};

export default HomePartners;