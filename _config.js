import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sourceMaps from "lume/plugins/source_maps.ts";


const site = lume()

const isProduction = false

site.use(jsx({
    pageSubExtension: ".page",
  }))


site.use(esbuild({
    extensions: [".jsx", ".js"],
    options: {
        jsxDev: ! isProduction,
        minify: isProduction
    }
  }))
  .use(sourceMaps({}))

export default site;
