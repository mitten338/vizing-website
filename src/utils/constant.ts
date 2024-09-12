export function getOptions(lng = fallbackLng, ns = "common") {
    return {
        // debug: true,
        supportedLngs: languageArr,
        fallbackLng,
        lng,
        fallbackNS: ns,
        defaultNS: ns,
        ns,
    };
}
const languageMap = [
    {
        path: "en",
        alias: "en-us",
        text: "English",
    },
    // {
    //     path: "zh",
    //     alias: "zh-cn",
    //     text: "中文",
    // },
];
export const languageArr = languageMap.map((item) => item.path);
export const languageCookieName = "NEXT_LOCALE";

export const fallbackLng = "en";

export const externalURLs = {
    twitter: 'https://x.com/Vizing_L2',
    discord: 'https://discord.com/invite/FbztTBvnBT',
    medium: 'https://medium.com/@Vizing_L2',
    github: 'https://github.com/Orbiter-Vizing',

    bridge: 'https://bridge.vizing.com',
    explorer: 'https://explorer.vizing.com',
    docs: 'https://docs.vizing.com',
    status: 'https://vizing.instatus.com'
}

export function openExternalURLs(key: keyof typeof externalURLs) {
    window.open(externalURLs[key], '_blank');
}
