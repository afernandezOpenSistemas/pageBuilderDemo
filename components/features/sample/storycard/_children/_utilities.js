/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
export function getWikipediaText(article) {
  const output = [];
  const paragraphs = /<p(.+?)p>/gim;

  article.replace(paragraphs, match => {
    const rawText = match.replace(/<sup(.+?)sup>/gim, "");
    output.push(rawText);
  }) || {};
  if (output.length === 0) {
    output.push(article);
  }
  return output;
}

export function getWikipediaImages(article) {
  const output = [];
  const images = new RegExp(
    "\\/\\/upload.wikimedia.org\\/\\S+\\.[jJ][pP][eE]?[gG]"
  );
  article.replace(images, match => {
    output.push(match);
  });
  return output;
}

export function getWikipediaLinks(article, limit = 1) {
  let index = 0;
  const output = [];
  const links = new RegExp(/<a[\s]+([^>]+)>((?:.(?!<\/a>))*.)<\/a>/gim);
  article.replace(links, match => {
    if (match.indexOf('class="external text"') >= 0 && index <= limit) {
      const link = document.createElement("a");
      link.innerHTML = match;
      const href = match.match(/href="([^"]*)/);
      output.push({
        text: link.innerText,
        url: href[1]
      });
      index += 1;
    }
  });
  return output;
}

export const populateWikipediaResults = results => {
  const wikiText = results.parse ? results.parse.text["*"] : results.error.info;
  // eslint-disable-next-line no-useless-escape
  const wikiLink = /href="([\/wiki\/"]+)/g;
  const formattedWikiLinks = wikiText.replace(
    wikiLink,
    'target="_blank" href="https://en.wikipedia.org/wiki/'
  );
  return formattedWikiLinks;
};

export const getWikipediaArticles = (searchTerms, component) => {
  const isObject = typeof searchTerms === "object";
  const length = isObject ? searchTerms.length - 1 : 0;
  const articles = [];
  for (let i = 0; i <= length; i += 1) {
    articles.push({
      term: `${
        isObject ? searchTerms[i].trim().replace(/ /g, "_") : searchTerms
      }`
    });
  }
  // eslint-disable-next-line no-loop-func
  articles.forEach((article, index) => {
    const { term } = article;
    const { data } = component
      .getContent("wikipedia", {
        term
      })
      .fetched.then(results => {
        if (
          results &&
          results.parse &&
          results.parse.text &&
          results.parse.text["*"].length > 0
        ) {
          articles[index].data = populateWikipediaResults(results);
          component.setState({
            data: [...articles]
          });
        }
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
    return data;
  });
};
