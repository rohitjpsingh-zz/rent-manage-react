const queryString = require('query-string');
export const appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
};
export const removeScript = (scriptToremove) => {
  let allsuspects = document.getElementsByTagName("script");
  for (let i = allsuspects.length; i >= 0; i--) {
    if (
      allsuspects[i] &&
      allsuspects[i].getAttribute("src") !== null &&
      allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1
    ) {
      allsuspects[i].parentNode.removeChild(allsuspects[i]);
    }
  }
};
export const convertToSlug = (Text) => {
    return Text
        .toLowerCase()
        .replace(/ /g,'_')
        .replace(/[^\w-]+/g,'')
        ;
};
export const queryStringParse = (Text) => {
  return queryString.parse(Text);
};
export const dynamicSort = (key, order = 'asc') => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}
export const disableAllLog = () => {
  console.log = function () {};
  console.warn = function () {};
  console.error = function () {};
  console.info = function () {};
}
// STORE THEME
export const setTheme = (theme) => {
  localStorage.setItem('theme', JSON.stringify(theme))
}
// GET THEME
export const getTheme = () => {
  return JSON.parse(localStorage.getItem('theme'));
}