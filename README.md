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
    //imports.json
    [
        [pack1, prodPath, devPath],
        [pack2, prodPath, devPath]
    ]

    //index.js
     var reekwire = require('reekwire');
    var imports = require('./imports.json');
    module.exports = reekwire.index(imports);


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
 //imports.json
[
  ["slugify", "voca/slugify", "./slugify.js"],
  ["taste", "taste-test", "./taste-test.js"],
]

//index.js
    var reekwire = require('reekwire');
    var imports = require('./imports.json');
    module.exports = reekwire.index(imports);

//app.js
var rk = require('./index');
var slug = rk.slugify();
var tasteTest = rk.taste();

slug("once upon a time") // "once-upon-a-time"

var taste = new tasteTest.Test();
taste.describe // function
```

## Easy pee, see?
