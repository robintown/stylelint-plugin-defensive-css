const expression = /-[-moz-|-ms-|-o-|-webkit-|]+-/g;

function findVendorPrefixes(selector) {
  if (!selector) return false;

  let prefixesFound = [...selector.matchAll(expression)];
  return prefixesFound.length > 1;
}

module.exports = {
  findVendorPrefixes,
};
