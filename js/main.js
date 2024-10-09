
// import notebooks from './products.js';
const notebooks = [
    {
        catalogId: 82,
        title: "ספירלה 2 נושא שורות - 1יח",
        price: 9.9,
        image: "/imgs/notebooks/iq2sub.jpg",
        tags: ["rows", "2sub", "a4", "spiral"]
    },
    {
        catalogId: 1,
        title: "ספירלה 1 נושא שורות - 1יח",
        price: 4.9,
        image: "/imgs/notebooks/iq1sub.jpg",
        tags: ["rows", "1sub", "a4", "spiral"]
    },
    {
        catalogId: 2,
        title: "ספירלה 1 נושא משבצות",
        price: 4.9,
        image: "/imgs/notebooks/basik_math.jpg",
        tags: ["squares", "a4", "spiral"]
    },
    {
        catalogId: 3,
        title: "ספירלה 2 נושא משבצות - 1יח",
        price: 9.9,
        image: "/imgs/notebooks/iq2sub.jpg",
        tags: ["squares", "a4", "spiral"]
    },
    {
        catalogId: 4,
        title: "מארז 5 מחברת שורות - רגילה",
        price: 6.5,
        image: "/imgs/craft/19.jpg",
        tags: ["rows", "a5"]
    },
    {
        catalogId: 5,
        title: "מארז 5 מחברת שורות - 10 שורות",
        price: 7.5,
        image: "/imgs/craft/19.jpg",
        tags: ["rows", "a5", "10rows"]
    },
    {
        catalogId: 6,
        title: "מארז 5 מחברת שורות - 14 שורות",
        price: 7.5,
        image: "/imgs/craft/19.jpg",
        tags: ["rows", "a5", "10rows"]
    },
    {
        catalogId: 7,
        title: "מארז 5 מחברת משבצות",
        price: 7.5,
        image: "/imgs/craft/19.jpg",
        tags: ["squares", "a5"]
    },
    {
        catalogId: 8,
        title: "מחברת אנגלית A5 בודדת",
        price: 1.9,
        image: "/imgs/notebooks/english.jpg",
        tags: ["english", "a5", "rows"]
    },
    {
        catalogId: 9,
        title: "10 עטיפות למחברת A5",
        price: 5.0,
        image: "/imgs/notebooks/wrap.jpg",
        tags: ["english", "a5", "rows"]
    },
    {
        catalogId: 10,
        title: "מחברת חכמה - מספר 1",
        price: 3.5,
        image: "/imgs/notebooks/smart1.jpg",
        tags: ["a5", "rows"]
    },
    {
        catalogId: 11,
        title: "מחברת חכמה - מספר 3",
        price: 3.0,
        image: "/imgs/notebooks/smart3.jpg",
        tags: ["a5", "rows"]
    },
    {
        catalogId: 12,
        title: "מארז 8 דפדפת שורות",
        price: 17.9,
        image: "/imgs/craft/37.jpg",
        tags: ["rows", "a4"]
    },
    {
        catalogId: 13,
        title: "מארז 8 דפדפת משבצות",
        price: 16.9,
        image: "/imgs/notebooks/block-squares.jpg",
        tags: ["squares", "a4"]
    },
    {
        catalogId: 14,
        title: "מחברת 80 עמוד עם גומי",
        price: 9.9,
        image: "/imgs/notebooks/black80.jpg",
        tags: ["a5", "rows"]
    },
    {
        catalogId: 15,
        title: "פנקס קטן",
        price: 4.0,
        image: "/imgs/notebooks/small.jpg",
        tags: ["rows"]
    },
    {
        catalogId: 20,
        title: "ספירלה 3 נושאים - שורות - אחרון",
        price: 15.9,
        image: "/imgs/notebooks/campus3sub.jpg",
        tags: ["rows", "3sub", "a4", "spiral"]
    },
]

const main = () => {
    renderProducts(notebooks);
}

main();