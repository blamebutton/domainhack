const fetch = require('node-fetch');
const path = require('path');
const { writeFile } = require('fs').promises;

const run = async () => {
  const rsp = await fetch('https://data.iana.org/TLD/tlds-alpha-by-domain.txt');
  const tldList = (await rsp.text()).split('\n')
    .filter(value => !value.startsWith('#'))
    .filter(value => value.trim().length > 0)
    .map(value => value.toLowerCase());
  const root = path.dirname(__dirname);
  await writeFile(`${root}/public/tlds.json`, JSON.stringify(tldList));
};

run()
  .catch(reason => console.error(reason));
