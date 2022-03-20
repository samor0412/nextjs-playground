const objectMap = (obj, fnKey = (v, k, i) => k, fnValue = (v, k, i) => v) =>
  Object.fromEntries(
    Object.entries(obj).map(([k, v], i) => [fnKey(v, k, i), fnValue(v, k, i)])
  );

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return defaultPathMap;
  },
};
