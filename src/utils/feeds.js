export function getJSONFeeds(feed, rssUrl) {
    const { items } = feed;
    const notValidJSONFeed = {
      title: "JSON Feed no válido",
      description: "Esto es un JSON Derulo y aquí solo se admite JSON Feed",
      imageSrc: "https://i.redd.it/d6ewdn0y1bg71.jpg",
    };
    return items
      ? [...items].map((item) => ({
          title: getTitle(item, rssUrl) || "Títular en camino",
          description: getDescription(item, rssUrl) || "De momento, poco que contar por aquí...",
          imageSrc: getImage(item, rssUrl) || "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png",
        }))
      : [notValidJSONFeed];
  };

  export function getXMLFeeds(feed, rssUrl) {
    const items = feed.querySelectorAll("item");
    const notValidXMLFeed = {
      title: "XML Feed no válido",
      description: "Xilófonos Molestos Longevos no es el tipo de archivo esperado",
      imageSrc: "https://thumbs.dreamstime.com/z/xil%C3%B3fono-de-juguete-con-dos-dedos-en-caricatura-instrumento-para-ni%C3%B1os-dibujos-animados-instrumen-ilustraci%C3%B3n-vectorial-132136085.jpg",
    }
    return items ?
      [...items].map((item) => ({
      title: getTitle(item, rssUrl) || "Títular en camino",
      description: getDescription(item, rssUrl) || "De momento, poco que contar por aquí...",
      imageSrc: getImage(item, rssUrl) ||
        "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png",
    }))
    : [notValidXMLFeed];

  };

  const getTitle = (item, rssUrl) =>
    rssUrl.endsWith("json")
      ? item?.title
      : item?.querySelector("title")?.textContent;

  const getDescription = (item, rssUrl) => {
    const description = rssUrl.endsWith("json")
      ? item?.content_html
      : item?.querySelector("description")?.textContent;
    return new DOMParser()
      .parseFromString(
        description
          .trim()
          .replace(/\n/g, "")
          .replace(/>[\t ]+</g, "><"),
        "text/html"
      )
      .querySelector("body").textContent;
  };

  const getImage = (item, rssUrl) =>
    rssUrl.endsWith("json")
      ? item?.image
      : new DOMParser()
          .parseFromString(
            item
              ?.querySelector("description")
              ?.textContent.trim()
              .replace(/\n/g, "")
              .replace(/>[\t ]+</g, "><"),
            "text/html"
          )
          .querySelector("img")?.src;
