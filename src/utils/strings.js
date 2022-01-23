export const isValidUrl = (url) => 
    /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/.test(url);

export const cleanSpacesBetweenHTMLTagsInString = (htmlString) => htmlString.replace(/>[\t ]+</g, "><");

export const cleanNewLineEscapeCharInString = (string) => string.replace(/\n/g, "");