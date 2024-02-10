import { fileURLToPath } from 'node:url'
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { satoriVue } from 'x-satori/vue'

(async function () {
    const _DIRNAME = typeof __dirname !== 'undefined'
        ? __dirname
        : dirname(fileURLToPath(import.meta.url))
    const _OUTPUT = resolve(_DIRNAME, './og.svg')

    const templateStr = await readFile(resolve(_DIRNAME, './Template.vue'), 'utf8')
    const satoriConfig = (await import('./config')).default
    const strSVG = await satoriVue(satoriConfig, templateStr)

    await writeFile(_OUTPUT, strSVG)
}()).catch(async (err: Error) => {
    console.error(err)
    await import('node:process').then(({ exit }) => exit(1))
})
