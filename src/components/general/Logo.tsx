import React, {HTMLProps} from 'react';
import {Divider, Stack, Text, TextProps, Title} from "@mantine/core";

interface Props extends HTMLProps<HTMLImageElement>{
    withSlogan?: boolean
    sloganProps?: TextProps
}

const Logo = ({withSlogan = false, sloganProps, ...others}: Props) => {
    return (
        <Stack>
            <img {...others} alt={"Logo da iPEC"} src={"/img/ipec-logo.png"}/>
            {withSlogan && <Stack>
                <Divider />
                <Text className={"text-center !text-lg"} {...sloganProps}>
                    O HUB DO AGRO
                </Text>
            </Stack>}
        </Stack>
    );
};

export default Logo;