# node-typescript-bd-sqlite-05-dao

### SQLite Viewer and SQLite Editor for VS Code

No Codespace, instalar a extensão (plugin) VS Code `SQLite Viewer and SQLite Editor for VS Code` for VS Code: 

![Alt: extensão (plugin) SQLite Viewer and SQLite Editor for VS Code for VS Code.](SQLiteViewerAndSQLiteEditorForVSCode.png)

### Iniciar um projeto `Node.js`:

```bash
sudo apt update
```

```bash
sudo apt install -y nodejs
```

```bash
node -v
```

```bash
npm install -g npm@11.19.0
```

```bash
npm -v
```

```bash
npm init -y
```

###  No arquivo `package.json`, substituir `"type": "commonjs",`  por `"type": "module",`:

```json
{
  "name": "typescript-bd-sqlite-05-dao",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wdiasmaciel/node-typescript-bd-sqlite-05-dao.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "bugs": {
    "url": "https://github.com/wdiasmaciel/node-typescript-bd-sqlite-05-dao/issues"
  },
  "homepage": "https://github.com/wdiasmaciel/node-typescript-bd-sqlite-05-dao#readme"
}
```

###  No arquivo `package.json`, inserir as linhas:
```json
    "dev": "node --watch ./src/Main.ts",
    "start": "npm run dev"
```

```json
{
  "name": "typescript-bd-sqlite-05-dao",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node --watch ./src/Main.ts",
    "start": "npm run dev"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wdiasmaciel/node-typescript-bd-sqlite-05-dao.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "bugs": {
    "url": "https://github.com/wdiasmaciel/node-typescript-bd-sqlite-05-dao/issues"
  },
  "homepage": "https://github.com/wdiasmaciel/node-typescript-bd-sqlite-05-dao#readme"
}
```
