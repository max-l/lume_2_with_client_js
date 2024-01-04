import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sourceMaps from "lume/plugins/source_maps.ts";


const site = lume()

const isProduction = false

site.use(jsx())

site.use(esbuild({
    entryPoints: ['main.jsx'],
    extensions: [".jsx"],
    options: {
        jsxDev: ! isProduction,
        minify: isProduction
    }
  }))
  .use(sourceMaps({}))

export default site;
