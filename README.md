1. node --experimental-sea-config config.json
2. node -e "require('fs').copyFileSync(process.execPath, 'hello.exe')"
3. npx postject hello.exe NODE_SEA_BLOB test.blob `
    --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 --overwrite


https://nodejs.org/api/single-executable-applications.html

node 环境必须是20 ，22执行报错