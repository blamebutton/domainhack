import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { promises } from 'fs';
const { writeFile } = promises;


const run = async () => {
  console.info('fetching tld list')
  const rsp = await fetch('https://data.iana.org/TLD/tlds-alpha-by-domain.txt')
  const tldList = (await rsp.text()).split('\n')
    .filter(value => !value.startsWith('#'))
    .filter(value => value.trim().length > 0)
    .map(value => value.toLowerCase())

  console.info(`tld size: ${tldList.length}`)

  const output = join(new URL(import.meta.url).pathname, '../..')
  console.info(`output: ${output}`)

  const file = join(output, '/public/tld-list.json')
  await writeFile(file, JSON.stringify(tldList, null, 2))
  console.info(`wrote tld list to ${file}`)
}

run()
  .catch(console.error)
