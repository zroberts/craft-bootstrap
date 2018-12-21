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


# New Methodology - Local Development

1. Create a new github repo, don't initialize it.
2. Download the Craft CMS Files on your local machine
```
composer create-project craftcms/craft ./
```
3. Initialize your local directory
```
git init
```
4. Create a basic readme, copy over/down a gitignore, add and commit the whole shabang.
```
echo "# REPO NAME" >> README.md
git add .
git commit -m "initial commit"
```
5. Add your new, blank repo as the origin, go ahead and push it
```
git remote add origin GIT REPO URL
git push
```
6. Add the bootstarp repo as a remote repository
```
git remote add -f bootstrap https://github.com/zroberts/craft-bootstrap.git
```
7. Merge the boostrap repo with the master repo
```
git merge bootstarp/master --allow-unrelated-histories
```
8. Fix any merge conflicts, add and commit. 
9. Remove bootstrap remote
```
git remote rm bootstrap
```
10. Get building!