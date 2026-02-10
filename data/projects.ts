// Project data for portfolio showcase
export const projects = [
    {
        id: "sada-e-qalam",
        title: "Sada E Qalam",
        role: "Complete Build from Scratch",
        description: "A comprehensive Islamic learning platform built from ground up",
        techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Material Design 3"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.sadaeqalam&hl=en_IN",
        appIcon: "📚",
    },
    {
        id: "sgem-plus-global",
        title: "SGEmplus Global",
        role: "Feature Updates & Enhancement",
        description: "Educational platform with enhanced features and performance improvements",
        techStack: ["Kotlin", "XML", "Android SDK", "REST API", "SQLite", "Material Design"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.sgemplusglobal&hl=en_IN",
        appIcon: "🎓",
    },
    {
        id: "islamic-gyan",
        title: "Islamic Gyan",
        role: "Maintenance & Updates",
        description: "Islamic education app with modern updates and bug fixes",
        techStack: ["Kotlin", "XML", "Firebase", "AdMob", "Material UI", "Material Design"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.shakirgyan.newmadarsa.learning&hl=en_IN",
        appIcon: "🕌",
    },
];

export type Project = typeof projects[0];
