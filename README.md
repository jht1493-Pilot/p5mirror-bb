# [p5mirror](https://github.com/molab-itp/p5mirror)

replace your-github in this link

- [github pages p5projects-index](https://your-github.github.io/p5mirror-your-github/p5projects-index.html)

```
bin/mirror.sh --user p5name
```
bin/mirror.sh --user benjamin.bergery

unix shell script 
then open Terminal in VS code
and copy and paste above command in


## Notes

mirror your editor.p5js sketches into a git repo

- Where are my editor.p5js sketches and collections ?
  - make sure that all your editor.p5js projects are available in a git repo
  - be prepared if editor.p5js server fails
- How ?
  - command line scripts download your p5 sketches with associated media files
  - mark down files generated to list sketches and collections
  - index file generated for your projects for github pages

## Recommended apps

- https://code.visualstudio.com/

- https://desktop.github.com/

### VS Code extensions

- https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode

- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

- https://marketplace.visualstudio.com/items?itemName=Swimm.swimm

## Usage

```

# p5name is the place holder for your editor.p5js user name

# fork this repo and name it p5mirror-p5name

# in p5mirror-p5name folder, run bin/mirror.sh to
# download p5js scripts for a user account
#   and create markdown listing files

bin/mirror.sh --user p5name

```

## mirror script details

- See bin/mirror.sh for details steps
- These steps can be run independantly

## search p5mirror on github for other repos

[https://github.com/search?q=p5mirror&type=repositories](https://github.com/search?q=p5mirror&type=repositories)

## Generated files

- [p5projects-index](./p5projects-index.md)

### Listings

- [downloads/gen/sketches_recent.md](./downloads/gen/sketches_recent.md)
- [downloads/gen/sketches.md](./downloads/gen/sketches.md)
- [downloads/gen/collections.md](./downloads/gen/collections.md)

### Shell scripts to download and unzip

- [downloads/gen/download.sh](./downloads/gen/download.sh)
- [downloads/gen/unzip.sh](./downloads/gen/unzip.sh)

### JSON source from editor.p5js

- [downloads/json/collections.json](./downloads/json/collections.json)
- [downloads/json/sketches.json](./downloads/json/sketches.json)
