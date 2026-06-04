# [Deep Learning IndabaX South Africa](https://indabax.co.za)

developed by Christopher Brian Currin [[🔗GitHub](https://github.com/ChrisCurrin) | [🌍website](https://chriscurrin.com)]

## Getting started with development

1. clone project to local directory
    ```bash
    git clone --recurse-submodules git@github.com:indabax-za/indabax-za.github.io.git
    cd indabax.github.io
    ```

1. install Hugo
   https://gohugo.io/getting-started/installing/
   

1. start server
    ```bash
    hugo server -D -d public  
    ```

## Changing **content**

Content is generally stored in `/content` directory. Each subdirectory is generally a page or collection of "posts" or "articles". The `_index.md` file in each subdirectory is the "landing page" for that section.

Sometimes information is better stored in a data file. For example, the list of speakers is stored in `/data/faculty.yaml`. This is because it is easier to maintain and update than individual docs in a subfolder. The limitation is that the data has expected formats and is not as flexible as a markdown file. Thus, big changes to data needs appropriate changes to the theme.

## Editing the **theme**

The theme is based on [Imbizo website](https://imbizo.africa) and is a `git submodule` in the `/themes` directory - [imbizo-website-base](https://github.com/isicnimbizo/imbizo-website-base).

Dealing with submodules can be a little tricky. The best way to work with them is to clone the project with the `--recurse-submodules` flag. This will clone the theme as well. If you forget to do this, you can run `git submodule update --init --recursive` to clone the theme.

To make changes to the theme, you need to clone the theme repo and make changes there. 
1. Then, commit and push the changes to the **theme repo**. 
1. Then, commit and push the changes to **this repo**.

If you forget to commit and push the theme repo, the changes will not be reflected in this repo. Changes to theme in this repo will be shown as a file that references which version of the submodule to use. **Don't commit a "dirty" change**. _Some of this may only make sense once you start making changes - that's okay!_

An advantage of this approach is a clean separation of concerns. The theme is a separate project and can be used in other projects. The theme is also a submodule, so it can be updated easily and the appropriate version of the theme can be explicitly used.


## LICENSE
based on [Imbizo website](https://imbizo.africa) and [Kross Hugo theme](https://github.com/themefisher/kross-hugo/) developed by Themefisher.

licensed using [MIT](https://github.com/themefisher/kross-hugo/blob/master/LICENSE)

icons by [Themify](https://themify.me/themify-icons)

slideshows by [Slick](https://kenwheeler.github.io/slick/)
