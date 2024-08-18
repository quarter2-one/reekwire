# reekwire

## Import mapping for CommonJS.

Import maps for CommonJS packages.

### Benefits

- Loads desired package for your environment ('development' / 'production').
- Avoid symlinks (that fail when you move the package to a new dev machine).
- Keep track of all imports in one place.
- Use a generic name for each import in the files they are used. If you change package out entirely with another that shares it's interface, you need only change the package reference in one place for the whole file.

### Usage

Import/require single package directly:

```
    //app.js
    var package = reekwire('production_path', 'development_path');
```

Or create index of all imports.

```
    //index.js
    module.exports = reekwire.index([
        [convenientName, prodPath, devPath],
        [name, prodPath, devPath]
    ]);


    //app.js
    var rk = require('./index');
    var package = rk.convenientName();
```

### Examples

#### Direct import

```
var rk = require("../reekwire");
var slug = rk("voca/slugify", "./slugify.js"); //rk(prodPath, devPath)

slug("once upon a time") // "once-upon-a-time"
```

#### Index

```
/*
An array of tupples representing imports.
    ["name", "production path", "development path"]
*/
var imports = [
  ["slugify", "voca/slugify", "./slugify.js"],
  ["taste", "taste-test", "./taste-test.js"],
];

var rk = require("../reekwire");
var r = rk.index(imports);

var slug = r.slugify();
slug("once upon a time") // "once-upon-a-time"

var tasteTest = r.taste();
var taste = new tasteTest.Test();
taste.describe // function
```

## Easy pee, see?
