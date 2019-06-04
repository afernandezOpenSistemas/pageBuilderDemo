# Plugins

To begin your adventure with plugins, start by [reading this excellent document about them](https://corecomponents.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/resources/plugins.md).

## How plugins are structured within the Skeleton Repo

The awesome thing about plugins is that you have an immense amount of freedom to make them work for you. But, if you want to get running really fast, we've configured a handy one, and we've extrapolated a common webpack config you can use to make other ones.

Take a look at the [wysiwyg-editor](./wysiwyg-editor) -- specifically, look at the [wysiwyg-editor's webpack config file](./wysisyg-editor/webpack.config.js). You can see how it inherits from the [common config](./common.config.js).

The Common Config does the following:

- Transpiles your ES6 code down so browsers can read it, using Babel.
- Extracts any CSS your plugin might need to operate.
- Outputs your built plugin into the [resources folder](./../resources/plugins) as an `index.html` and `plugin.js` file.

## How do I get my plugin to build?

If you make a change to your plugin, you'll need to run `npm run build:plugins` to run the specified webpack process on all your plugins.

If you're developing on plugins, you'll need to run `npm run watch:plugins` to trigger a watch process on them.

> Can I just put my plugin in the `resources/plugins` folder directly, as an `index.html` and a `plugin.js` file?

Yes! You could just write your plugins in there directly, but they would need to be compiled code that any browser could read. This might work for really simple plugins, but we thought in most cases, and to take advantage of NPM modules, folks would want to use them within the `plugins` folder, with a webpack set up.
