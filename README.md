# Steam Login

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/nomiscz/flarum-ext-auth-steam.svg)](https://packagist.org/packages/nomiscz/flarum-ext-auth-steam)

A [Flarum](http://flarum.org) extension. Allow users to log in with Steam

:warning: Works only on version 0.1.0-beta.9 and later.

:zap: You can use it on older version (0.1.0-beta.8.x) , but you need to edit vendor file (vendors/flarum/core/src/Forum/Auth/ResponseFactory.php)
> https://github.com/flarum/core/commit/67f9375d4745add194ae3249d526197c32fd5461

### Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually with composer:

```sh
composer require nomiscz/flarum-ext-auth-steam
```

### Updating

```sh
composer update nomiscz/flarum-ext-auth-steam
php flarum cache:clear
```

### Links

- [Packagist](https://packagist.org/packages/nomiscz/flarum-ext-auth-steam)
