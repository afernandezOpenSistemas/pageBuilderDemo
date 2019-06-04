# Site Styles: CSS and multisite

The Skeleton repo approach to styles can be described best via three principles:

1. A `base` set of stylesheets specifies styles across all of your sites.

1. Site specific stylesheets can overwrite whatever parts of the `base` stylesheet need to be more custom for that particular brand.

1. Site specific stylesheets -- or even the base stylesheets -- can be extended to the point that your organization demands.

#### Things to keep in mind when starting from this repo:

The Skeleton Repo comes with Arc Frame built in. Arc Frame is a small CSS framework that represents the handiest of helper classes we've come up with after building dozens of sites. Arc Frame is what we'll rely on to get you up and running quickly.

Arc Frame is written in the BEM naming convention, a standard adopted by thousands of developers.

https://github.com/wapopartners/tools_arc-frame_bem

(If you need access to Arc Frame, you can request it through Arc Support)

#### What if I want to use part, but not all, of Arc Frame?

Arc Frame is not monolithic -- you can use part, all, or none of it. The classes are [well-documented in the Arc Frame styleguide that you can view by running Arc Frame locally](https://github.com/wapopartners/tools_arc-frame_bem).

For example, if you want to use our borders, and our margins and padding, but you want to use a different grid system, such as Bootstrap, you do that by importing the pieces you want in `src/base/_base.scss`.

You would then have to go through the repo and replace our grid classes with the corresponding Bootstrap ones. The process might be a little tedious, but it is certainly possible.

### Make sure that your styles are wired up

A few different files are critical for how your styles get to your end users.

[The Webpack Configuration](./../../../config/entries.js) - This is where your stylesheets are processed from the `src/` folder, and shows how they are output into `resources/dist`. You'll see a note telling you what assets are being built for which site when you run `npm run build` or `npm run dev`.

[The Default output type](./../../../components/output-types/default.jsx) - When you get up and running for the first time, your default output type will be something you should be familiar with. You can see where your stylesheets are being included on the page at a part that looks like this:

```
<link rel="stylesheet"
  href={props.deployment(`${props.contextPath}/resources/dist/${arcSite}/css/style.css`)}/>
```

This ensures that every site gets a site-specific style sheet.

[Files within your site-specific directory](./../../../src/websites/the-gazette) - Within your `src/websites` folder, you should have one folder for each of your properties or brands. This is where you can overwrite styles specific to a brand.

The structure of this folder should look like this:

```
websites
  /the-gazette
    /extend
      _index.scss
      _*.scss (any other SCSS files used for overriding elements at a website level)
    _framework-overrides.scss
    the-gazette.scss
    index.js
```

Let's walk thorugh these files:

`the-gazette.scss` - This is the file that webpack takes and produces a `style.css` file from. Keep this file simple -- the recommended implementation is to have this setup:

```
  /* Variable Definitions */
  @import './extend/index';

  /* Imports and extends base stylesheet */
  @import './../../base/base';
```

In our first `@import` statement, we import all of our site-specific styles and overrides. We can overwrite specific classes if we want to, or we can establish our own Sass variables that Arc Frame can use.

In our second `@import` statement, we extend the `base` stylesheet -- this pulls in all of our Arc Frame styles and other things we want applied across all of our sites.

These two imports do two things:

1. They allow us to use a shared set of styles, inherited from Arc Frame (or elsewhere), and
1. They allow us to overwrite any of those styles on a site-by-site basis.

`index.js` - This is an entrypoint for any site-specific JS. Hopefully you won't need much of this, but it's there for you in your time of need.

`/_framework-overrides.scss` - This is where you place the Sass variables that you want to override in the Arc Framework. These tend to be elements of sites that are highly customizable, such as fonts, breakpoints, colors and grid properties. Take a look at some of the examples to get a feel for how they work.

`/extend/_index.scss` - Within the `/extend` folder, you can place any overrides on specific elements for your specific sites. It is suggested to set up defaults within the `src/base` folder, and then use the Sass variable technique to override them at the website level. You can take a look at `/src/base/framework/_headers.scss` and `/src/websites/the-gazette/extend/_headers.scss`.

#### Recipe: Change a single site's default colors

1. Within `src/websites/the-gazette/_framework-overrides.scss`, look for the `$colors` Sass map.
1. The variables for the colors in there are the ones used by Arc Frame. You can go ahead and overwrite them with your desired colors.
1. Run `npm run dev` if it isn't already running — you should see your assets build in the terminal, and your colors appear on your site.

Next: [Fonts! Fonts! Fonts!](./adding-fonts.md)
