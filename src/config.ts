export const SITE = {
    website: "https://kattangalsec.in/",
    author: "CSC NITC",
    profile: "https://kattangalsec.in/",
    desc: "Official blog of the Cyber Security Club, NIT Calicut. Explore CTF writeups, security research, hacking techniques, and cybersecurity insights from India's premier technical institute.",
    title: "CSC NITC",
    ogImage: "favicon.png",
    lightAndDarkMode: false,
    postPerIndex: 4,
    postPerPage: 12,
    scheduledPostMargin: 15 * 60 * 1000,
    showArchives: false,
    showBackButton: true,
    editPost: {
        enabled: false,
        text: "Edit page",
        url: "",
    },
    dynamicOgImage: true,
    dir: "ltr",
    lang: "en",
    timezone: "Asia/Kolkata",
} as const;

export const WRITEUPS_REPO = {
    url: "https://github.com/cscnitc/writeups",
    blobBase: "https://github.com/cscnitc/writeups/blob/main",
} as const;
