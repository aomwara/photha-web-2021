const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const rootDir = path.resolve(__dirname, '..')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

async function getNuxt() {
  if (isDev) {
    const nuxt = await loadNuxt({ for: 'dev', rootDir })
    await build(nuxt)
    return nuxt
  }

  const nuxt = await loadNuxt({ for: 'start', rootDir })
  return nuxt
}

getNuxt().then(nuxt => startServer(nuxt)).catch(error => {
  console.error(error)
  process.exit(1)
})
