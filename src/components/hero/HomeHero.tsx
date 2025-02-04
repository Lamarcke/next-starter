import React from 'react';
import useOnMobile from "@/components/general/hooks/useOnMobile";

const HomeHero = () => {
    const onMobile = useOnMobile()

    if (onMobile){
        return <div className={"w-full relative h-full max-w-full"}>
            <img alt={"Apresentação da iPEC"} src={"/img/home-hero-1-sm.png"}  style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
            }}/>
        </div>
    }

    return (
        <div className={"w-full relative h-full max-w-screen"}>
            <img alt={"Apresentação da iPEC"} src={"/img/home-hero-1.jpg"}  style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
            }}/>
        </div>
    );
};

export default HomeHero;