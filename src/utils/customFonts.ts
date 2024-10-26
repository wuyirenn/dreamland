import localFont from "next/font/local";

const NunitoSans = localFont({ 
    src: "../../public/assets/fonts/nunito-sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf",
    variable: "--font-nunitosans"
})

const AvantGarde = localFont({
    src: [
        {
            path: "../../public/assets/fonts/avant-garde/ITCAvantGardeStd-Bk.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/assets/fonts/avant-garde/ITCAvantGardeStd-Md.ttf",
            weight: "500",
            style: "medium",
        },
        {
            path: "../../public/assets/fonts/avant-garde/ITCAvantGardeStd-Demi.ttf",
            weight: "600",
            style: "semibold",
        },
        {
            path: "../../public/assets/fonts/avant-garde/ITCAvantGardeStd-Bold.ttf",
            weight: "700",
            style: "bold",
        },
    ],
    variable: "--font-avantgarde"
});

export { NunitoSans, AvantGarde };