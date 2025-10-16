function getImageUrl(path) {
    return new URL(`../../assets/${path}`, import.meta.url).href;
    //return "../../assets/" + path;
}

export default getImageUrl;