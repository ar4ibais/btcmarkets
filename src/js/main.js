import tabs from "./modules/tabs";
import currency from "./modules/currency";
import news from "./modules/news";
import header from "./modules/header";

window.addEventListener('DOMContentLoaded', () => {
    tabs();
    currency();
    news();
    header();
});