const baseURL = "https://github.com/vantamanova/wdd230/";
const linksURL = "https://github.com/vantamanova/wdd230/data/links.json";

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
}

getLinks(linksURL);