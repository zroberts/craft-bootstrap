# craft-bootstrap
A basic Craft 3 Instalation. Includes Gulp for some basic task running. 

## Duplicating this Repo (as the owner)

1. Create a new Repo (blank/empty repo)
2. Clone the blank repo to local storage.
```
git clone REPO-URL
```
3. Add Upstream remote to this REPO
```
git remote add upstream https://github.com/zroberts/craft-bootstrap.git
```
4. Pull the repo down
```
git pulll upstream master
```
5. Push your nice, new repo back up to 
```
git push
```
6. Remove the rmeote repo from your new site
```
git remote rm upstream
```

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
gulp
```
Watches the SASS, uses browser sync and keeps the site auto-reloading.

```
gulp build
```
Cleans dist folder, and compiles the scripts and fonts.