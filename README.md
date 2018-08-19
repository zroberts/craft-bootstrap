# craft-bootstrap
A basic Craft 3 Instalation. Includes Gulp for some basic task running. 

## Pushing to the Digital Ocean Server

```
git remote add REPO_NAME ssh://USER@IP_ADDRESS/var/repo/site.git
```
Replace the REPO_NAME with name of the repo (IE, Live, Dev, etc..). Username is the SSH Username of the server, IP_ADDRESS is the IP address of the server. The Server git repo is set to /var/repo/site.git.

To push to this repo.
```
git push REPO_NAME BRANCH_NAME
```

## Gulp Packages Installed
- Gulp
- Gulp Sass
- Browser Sync
- Gulp Concat
- Gulp Rename
- Gulp Uglify
- Gulp CSS Nano
- Gulp Image Min
- Gulp Cache
- Del
- Run Sequence
- Gulp Auto-prefixer

## Gulp Pre-Configured Commands

### Development:
```
gulp watch
```
Watches for changes in files. If the files need compiled, it ruuns the compilers. Then triggers an automatic browser-reload on the server for viewing the changes.