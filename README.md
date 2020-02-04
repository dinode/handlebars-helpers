This package is a subset of [handlebars-helpers](https://github.com/helpers/handlebars-helpers) and is not published to any package manager. Use this repository link as github dependency in package.json to install.

How to install package directly from github ?[[Help]](https://stackoverflow.com/questions/17509669/how-to-install-an-npm-package-from-github-directly)

### Helpers - Categories

**Helpers copied from [handlebars-helpers](https://github.com/helpers/handlebars-helpers)**

- **[number](#number)** ([code](lib/number.js) | [unit tests](test/number.js))
- **[string](#string)** ([code](lib/string.js) | [unit tests](test/string.js))
- **[url](#url)** ([code](lib/url.js) | [unit tests](test/url.js))
- **[math](#math)** ([code](lib/math.js) | [unit tests](test/math.js))
- **[comparison](#comparison)** ([code](lib/comparison.js) | [unit tests](test/comparison.js))

**Additional customized helpers**

- **[date](#date)** ([code](lib/date.js) | [unit tests](test/date.js))
- **[string - replaceregex](#string)** ([code](lib/string.js) | [unit tests](test/string.js))


### Helpers - Description

### number

### [{{bytes}}](lib/number.js#L24)

Format a number to it's equivalent in bytes. If a string is passed, it's length will be formatted and returned.

**Examples:**

* `'foo' => 3 B`
* `13661855 => 13.66 MB`
* `825399 => 825.39 kB`
* `1396 => 1.4 kB`

**Params**

* `number` **{Number|String}**
* `returns` **{String}**

### [{{addCommas}}](lib/number.js#L61)

Add commas to numbers

**Params**

* `num` **{Number}**
* `returns` **{Number}**

### [{{phoneNumber}}](lib/number.js#L74)

Convert a string or number to a formatted phone number.

**Params**

* `num` **{Number|String}**: The phone number to format, e.g. `8005551212`
* `returns` **{Number}**: Formatted phone number: `(800) 555-1212`

### [{{toAbbr}}](lib/number.js#L92)

Abbreviate numbers to the given number of `precision`. This is for
general numbers, not size in bytes.

**Params**

* `number` **{Number}**
* `precision` **{Number}**
* `returns` **{String}**

### [{{toExponential}}](lib/number.js#L130)

Returns a string representing the given number in exponential notation.

**Params**

* `number` **{Number}**
* `fractionDigits` **{Number}**: Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
* `returns` **{Number}**

**Example**

```handlebars
{{toExponential number digits}};
```

### [{{toFixed}}](lib/number.js#L153)

Formats the given number using fixed-point notation.

**Params**

* `number` **{Number}**
* `digits` **{Number}**: (Optional) The number of digits to appear after the decimal point; this may be a value between 0 and 20. If this argument is omitted, it is treated as 0.
* `returns` **{String}**: A string representing the given number using fixed-point notation.

**Example**

```handlebars
{{toFixed "1.1234" 2}}
//=> '1.12'
```

### [{{toFloat}}](lib/number.js#L169)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{toInt}}](lib/number.js#L179)

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{toPrecision}}](lib/number.js#L196)

Returns a string representing the `Number` object to the specified precision.

**Params**

* `number` **{Number}**
* `precision` **{Number}**: (Optional) An integer specifying the number of significant digits. If precison is not between 1 and 100 (inclusive), it will be coerced to `0`.
* `returns` **{String}**: A string representing a Number object in fixed-point or exponential notation rounded to precision significant digits.

**Example**

```handlebars
{{toPrecision "1.1234" 2}}
//=> '1.1'
```
### string

### [{{append}}](lib/string.js#L22)

Append the specified `suffix` to the given string.

**Params**

* `str` **{String}**
* `suffix` **{String}**
* `returns` **{String}**

**Example**

```handlebars
<!-- given that "item.stem" is "foo" -->
{{append item.stem ".html"}}
<!-- results in:  'foo.html' -->
```

### [{{camelcase}}](lib/string.js#L41)

camelCase the characters in the given `string`.

**Params**

* `string` **{String}**: The string to camelcase.
* `returns` **{String}**

**Example**

```handlebars
{{camelcase "foo bar baz"}};
<!-- results in:  'fooBarBaz' -->
```

### [{{capitalize}}](lib/string.js#L60)

Capitalize the first word in a sentence.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalize "foo bar baz"}}
<!-- results in:  "Foo bar baz" -->
```

### [{{capitalizeAll}}](lib/string.js#L77)

Capitalize all words in a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{capitalizeAll "foo bar baz"}}
<!-- results in:  "Foo Bar Baz" -->
```

### [{{center}}](lib/string.js#L95)

Center a string using non-breaking spaces

**Params**

* `str` **{String}**
* `spaces` **{String}**
* `returns` **{String}**

### [{{chop}}](lib/string.js#L125)

Like trim, but removes both extraneous whitespace **and non-word characters** from the beginning and end of a string.

**Params**

* `string` **{String}**: The string to chop.
* `returns` **{String}**

**Example**

```handlebars
{{chop "_ABC_"}}
<!-- results in:  'ABC' -->

{{chop "-ABC-"}}
<!-- results in:  'ABC' -->

{{chop " ABC "}}
<!-- results in:  'ABC' -->
```

### [{{dashcase}}](lib/string.js#L143)

dash-case the characters in `string`. Replaces non-word characters and periods with hyphens.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dashcase "a-b-c d_e"}}
<!-- results in:  'a-b-c-d-e' -->
```

### [{{dotcase}}](lib/string.js#L162)

dot.case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{dotcase "a-b-c d_e"}}
<!-- results in:  'a.b.c.d.e' -->
```

### [{{downcase}}](lib/string.js#L182)

Lowercase all of the characters in the given string. Alias for [lowercase](#lowercase).

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{downcase "aBcDeF"}}
<!-- results in:  'abcdef' -->
```

### [{{ellipsis}}](lib/string.js#L202)

Truncates a string to the specified `length`, and appends it with an elipsis, `…`.

**Params**

* `str` **{String}**
* `length` **{Number}**: The desired length of the returned string.
* `returns` **{String}**: The truncated string.

**Example**

```handlebars
{{ellipsis (sanitize "<span>foo bar baz</span>"), 7}}
<!-- results in:  'foo bar…' -->
{{ellipsis "foo bar baz", 7}}
<!-- results in:  'foo bar…' -->
```

### [{{hyphenate}}](lib/string.js#L223)

Replace spaces in a string with hyphens.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{hyphenate "foo bar baz qux"}}
<!-- results in:  "foo-bar-baz-qux" -->
```

### [{{isString}}](lib/string.js#L240)

Return true if `value` is a string.

**Params**

* `value` **{String}**
* `returns` **{Boolean}**

**Example**

```handlebars
{{isString "foo"}}
<!-- results in:  'true' -->
```

### [{{lowercase}}](lib/string.js#L256)

Lowercase all characters in the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{lowercase "Foo BAR baZ"}}
<!-- results in:  'foo bar baz' -->
```

### [{{occurrences}}](lib/string.js#L278)

Return the number of occurrences of `substring` within the given `string`.

**Params**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{Number}**: Number of occurrences

**Example**

```handlebars
{{occurrences "foo bar foo bar baz" "foo"}}
<!-- results in:  2 -->
```

### [{{pascalcase}}](lib/string.js#L303)

PascalCase the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{pascalcase "foo bar baz"}}
<!-- results in:  'FooBarBaz' -->
```

### [{{pathcase}}](lib/string.js#L323)

path/case the characters in `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{pathcase "a-b-c d_e"}}
<!-- results in:  'a/b/c/d/e' -->
```

### [{{plusify}}](lib/string.js#L343)

Replace spaces in the given string with pluses.

**Params**

* `str` **{String}**: The input string
* `returns` **{String}**: Input string with spaces replaced by plus signs

**Example**

```handlebars
{{plusify "foo bar baz"}}
<!-- results in:  'foo+bar+baz' -->
```

### [{{prepend}}](lib/string.js#L363)

Prepends the given `string` with the specified `prefix`.

**Params**

* `str` **{String}**
* `prefix` **{String}**
* `returns` **{String}**

**Example**

```handlebars
<!-- given that "val" is "bar" -->
{{prepend val "foo-"}}
<!-- results in:  'foo-bar' -->
```

### [{{raw}}](lib/string.js#L385)

Render a block without processing mustache templates inside the block.

**Params**

* `options` **{Object}**
* `returns` **{String}**

**Example**

```handlebars
{{{{#raw}}}}
{{foo}}
{{{{/raw}}}}
<!-- results in:  '{{foo}}' -->
```

### [{{remove}}](lib/string.js#L413)

Remove all occurrences of `substring` from the given `str`.

**Params**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{remove "a b a b a b" "a "}}
<!-- results in:  'b b b' -->
```

### [{{removeFirst}}](lib/string.js#L432)

Remove the first occurrence of `substring` from the given `str`.

**Params**

* `str` **{String}**
* `substring` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{remove "a b a b a b" "a"}}
<!-- results in:  ' b a b a b' -->
```

### [{{replace}}](lib/string.js#L452)

Replace all occurrences of substring `a` with substring `b`.

**Params**

* `str` **{String}**
* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{replace "a b a b a b" "a" "z"}}
<!-- results in:  'z b z b z b' -->
```

### [{{replaceFirst}}](lib/string.js#L473)

Replace the first occurrence of substring `a` with substring `b`.

**Params**

* `str` **{String}**
* `a` **{String}**
* `b` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{replace "a b a b a b" "a" "z"}}
<!-- results in:  'z b a b a b' -->
```

### [{{reverse}}](lib/string.js#L492)

Reverse a string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{reverse "abcde"}}
<!-- results in:  'edcba' -->
```

### [{{sentence}}](lib/string.js#L509)

Sentence case the given string

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{sentence "hello world. goodbye world."}}
<!-- results in:  'Hello world. Goodbye world.' -->
```

### [{{snakecase}}](lib/string.js#L528)

snake_case the characters in the given `string`.

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{snakecase "a-b-c d_e"}}
<!-- results in:  'a_b_c_d_e' -->
```

### [{{split}}](lib/string.js#L547)

Split `string` by the given `character`.

**Params**

* `string` **{String}**: The string to split.
* `returns` **{String}** `character`: Default is an empty string.

**Example**

```handlebars
{{split "a,b,c" ","}}
<!-- results in:  ['a', 'b', 'c'] -->
```

### [{{startsWith}}](lib/string.js#L572)

Tests whether a string begins with the given prefix.

**Params**

* `prefix` **{String}**
* `testString` **{String}**
* `options` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{#startsWith "Goodbye" "Hello, world!"}}
  Whoops
{{else}}
  Bro, do you even hello world?
{{/startsWith}}
```

### [{{titleize}}](lib/string.js#L596)

Title case the given string.

**Params**

* `str` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{titleize "this is title case"}}
<!-- results in:  'This Is Title Case' -->
```

### [{{trim}}](lib/string.js#L623)

Removes extraneous whitespace from the beginning and end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trim " ABC "}}
<!-- results in:  'ABC' -->
```

### [{{trimLeft}}](lib/string.js#L639)

Removes extraneous whitespace from the beginning of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trim " ABC "}}
<!-- results in:  'ABC ' -->
```

### [{{trimRight}}](lib/string.js#L657)

Removes extraneous whitespace from the end of a string.

**Params**

* `string` **{String}**: The string to trim.
* `returns` **{String}**

**Example**

```handlebars
{{trimRight " ABC "}}
<!-- results in:  ' ABC' -->
```

### [{{truncate}}](lib/string.js#L680)

Truncate a string to the specified `length`. Also see [ellipsis](#ellipsis).

**Params**

* `str` **{String}**
* `limit` **{Number}**: The desired length of the returned string.
* `suffix` **{String}**: Optionally supply a string to use as a suffix to denote when the string has been truncated. Otherwise an ellipsis (`…`) will be used.
* `returns` **{String}**: The truncated string.

**Example**

```handlebars
truncate("foo bar baz", 7);
<!-- results in:  'foo bar' -->
truncate(sanitize("<span>foo bar baz</span>", 7));
<!-- results in:  'foo bar' -->
```

### [{{truncateWords}}](lib/string.js#L712)

Truncate a string to have the specified number of words. Also see [truncate](#truncate).

**Params**

* `str` **{String}**
* `limit` **{Number}**: The desired length of the returned string.
* `suffix` **{String}**: Optionally supply a string to use as a suffix to denote when the string has been truncated.
* `returns` **{String}**: The truncated string.

**Example**

```handlebars
truncateWords("foo bar baz", 1);
<!-- results in:  'foo…' -->
truncateWords("foo bar baz", 2);
<!-- results in:  'foo bar…' -->
truncateWords("foo bar baz", 3);
<!-- results in:  'foo bar baz' -->
```

### [{{upcase}}](lib/string.js#L742)

Uppercase all of the characters in the given string. Alias for [uppercase](#uppercase).

**Params**

* `string` **{String}**
* `returns` **{String}**

**Example**

```handlebars
{{upcase "aBcDeF"}}
<!-- results in:  'ABCDEF' -->
```

### [{{uppercase}}](lib/string.js#L763)

Uppercase all of the characters in the given string. If used as a block helper it will uppercase the entire block. This helper does not support inverse blocks.

**Params**

* `str` **{String}**: The string to uppercase
* `options` **{Object}**: Handlebars options object
* `returns` **{String}**

**Example**

```handlebars
{{uppercase "aBcDeF"}}
<!-- results in:  'ABCDEF' -->
```
### url

### [{{encodeURI}}](lib/url.js#L19)

Encodes a Uniform Resource Identifier (URI) component
by replacing each instance of certain characters by
one, two, three, or four escape sequences representing
the UTF-8 encoding of the character.

**Params**

* `str` **{String}**: The un-encoded string
* `returns` **{String}**: The endcoded string

### [{{escape}}](lib/url.js#L34)

Escape the given string by replacing characters with escape sequences.
Useful for allowing the string to be used in a URL, etc.

**Params**

* `str` **{String}**
* `returns` **{String}**: Escaped string.

### [{{decodeURI}}](lib/url.js#L48)

Decode a Uniform Resource Identifier (URI) component.

**Params**

* `str` **{String}**
* `returns` **{String}**

### [{{url_encode}}](lib/url.js#L59)

Alias for [encodeURI](#encodeuri).

### [{{url_decode}}](lib/url.js#L68)

Alias for [decodeURI](#decodeuri).

### [{{urlResolve}}](lib/url.js#L82)

Take a base URL, and a href URL, and resolve them as a
browser would for an anchor tag.

**Params**

* `base` **{String}**
* `href` **{String}**
* `returns` **{String}**

### [{{urlParse}}](lib/url.js#L94)

Parses a `url` string into an object.

**Params**

* `str` **{String}**: URL string
* `returns` **{String}**: Returns stringified JSON

### [{{stripQuerystring}}](lib/url.js#L106)

Strip the query string from the given `url`.

**Params**

* `url` **{String}**
* `returns` **{String}**: the url without the queryString

### [{{stripProtocol}}](lib/url.js#L126)

Strip protocol from a `url`. Useful for displaying media that may have an 'http' protocol on secure connections.

**Params**

* `str` **{String}**
* `returns` **{String}**: the url with http protocol stripped

**Example**

```handlebars
<!-- url = 'http://foo.bar' -->
{{stripProtocol url}}
<!-- results in: '//foo.bar' -->
```

#### math

### [{{abs}}](lib/math.js#L15)

Return the magnitude of `a`.

**Params**

* `a` **{Number}**
* `returns` **{Number}**

### [{{add}}](lib/math.js#L31)

Return the sum of `a` plus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### [{{avg}}](lib/math.js#L54)

Returns the average of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{avg "[1, 2, 3, 4, 5]"}}
<!-- results in: '3' -->
```

### [{{ceil}}](lib/math.js#L69)

Get the `Math.ceil()` of the given value.

**Params**

* `value` **{Number}**
* `returns` **{Number}**

### [{{divide}}](lib/math.js#L84)

Divide `a` by `b`

**Params**

* `a` **{Number}**: numerator
* `b` **{Number}**: denominator

### [{{floor}}](lib/math.js#L102)

Get the `Math.floor()` of the given value.

**Params**

* `value` **{Number}**
* `returns` **{Number}**

### [{{minus}}](lib/math.js#L118)

Return the difference of `a` minus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**

### [{{modulo}}](lib/math.js#L137)

Get the remainder of a division operation.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### [{{multiply}}](lib/math.js#L157)

Return the product of `a` times `b`.

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier
* `returns` **{Number}**

### [{{plus}}](lib/math.js#L175)

Add `a` by `b`.

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier

### [{{random}}](lib/math.js#L194)

Generate a random number between two values

**Params**

* `min` **{Number}**
* `max` **{Number}**
* `returns` **{String}**

### [{{remainder}}](lib/math.js#L212)

Get the remainder when `a` is divided by `b`.

**Params**

* `a` **{Number}**: a
* `b` **{Number}**: b

### [{{round}}](lib/math.js#L224)

Round the given number.

**Params**

* `number` **{Number}**
* `returns` **{Number}**

### [{{subtract}}](lib/math.js#L241)

Return the product of `a` minus `b`.

**Params**

* `a` **{Number}**
* `b` **{Number}**
* `returns` **{Number}**

### [{{sum}}](lib/math.js#L263)

Returns the sum of all numbers in the given array.

**Params**

* `array` **{Array}**: Array of numbers to add up.
* `returns` **{Number}**

**Example**

```handlebars
{{sum "[1, 2, 3, 4, 5]"}}
<!-- results in: '15' -->
```

### [{{times}}](lib/math.js#L286)

Multiply number `a` by number `b`.

**Params**

* `a` **{Number}**: factor
* `b` **{Number}**: multiplier
* `returns` **{Number}**

### comparison

### [{{and}}](lib/comparison.js#L27)

Helper that renders the block if **both** of the given values are truthy. If an inverse block is specified it will be rendered when falsy. Works as a block helper, inline helper or subexpression.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

**Example**

```handlebars
<!-- {great: true, magnificent: true} -->
{{#and great magnificent}}A{{else}}B{{/and}}
<!-- results in: 'A' -->
```

### [{{compare}}](lib/comparison.js#L57)

Render a block when a comparison of the first and third
arguments returns true. The second argument is
the [arithemetic operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) to use. You may also
optionally specify an inverse block to render when falsy.

**Params**

* `a` **{}**
* `operator` **{}**: The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
* `b` **{}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or if specified the inverse block is rendered if falsey.

### [{{contains}}](lib/comparison.js#L124)

Block helper that renders the block if `collection` has the given `value`, using strict equality (`===`) for comparison, otherwise the inverse block is rendered (if specified). If a `startIndex` is specified and is negative, it is used as the offset from the end of the collection.

**Params**

* `collection` **{Array|Object|String}**: The collection to iterate over.
* `value` **{any}**: The value to check for.
* `[startIndex=0]` **{Number}**: Optionally define the starting index.
* `options` **{Object}**: Handlebars provided options object.

**Example**

```handlebars
<!-- array = ['a', 'b', 'c'] -->
{{#contains array "d"}}
  This will not be rendered.
{{else}}
  This will be rendered.
{{/contains}}
```

### [{{default}}](lib/comparison.js#L143)

Returns the first value that is not undefined, otherwise the "default" value is returned.

**Params**

* `value` **{any}**
* `defaultValue` **{any}**
* `returns` **{String}**

### [{{eq}}](lib/comparison.js#L165)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{gt}}](lib/comparison.js#L188)

Block helper that renders a block if `a` is **greater than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{gte}}](lib/comparison.js#L212)

Block helper that renders a block if `a` is **greater than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{has}}](lib/comparison.js#L232)

Block helper that renders a block if `value` has `pattern`.
If an inverse block is specified it will be rendered when falsy.

**Params**

* `val` **{any}**: The value to check.
* `pattern` **{any}**: The pattern to check for.
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{isFalsey}}](lib/comparison.js#L274)

Returns true if the given `value` is falsey. Uses the [falsey](https://github.com/jonschlinkert/falsey)
library for comparisons. Please see that library for more information
or to report bugs with this helper.

**Params**

* `val` **{any}**
* `options` **{Options}**
* `returns` **{Boolean}**

### [{{isTruthy}}](lib/comparison.js#L289)

Returns true if the given `value` is truthy. Uses the [falsey](https://github.com/jonschlinkert/falsey)
library for comparisons. Please see that library for more information
or to report bugs with this helper.

**Params**

* `val` **{any}**
* `options` **{Options}**
* `returns` **{Boolean}**

### [{{ifEven}}](lib/comparison.js#L310)

Return true if the given value is an even number.

**Params**

* `number` **{Number}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

**Example**

```handlebars
{{#ifEven value}}
  render A
{{else}}
  render B
{{/ifEven}}
```

### [{{ifNth}}](lib/comparison.js#L327)

Conditionally renders a block if the remainder is zero when
`a` operand is divided by `b`. If an inverse block is specified
it will be rendered when the remainder is **not zero**.

**Params**

* **{}**: {Number}
* **{}**: {Number}
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{ifOdd}}](lib/comparison.js#L350)

Block helper that renders a block if `value` is **an odd number**. If an inverse block is specified it will be rendered when falsy.

**Params**

* `value` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

**Example**

```handlebars
{{#ifOdd value}}
  render A
{{else}}
  render B
{{/ifOdd}}
```

### [{{is}}](lib/comparison.js#L367)

Block helper that renders a block if `a` is **equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
Similar to [eq](#eq) but does not do strict equality.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{isnt}}](lib/comparison.js#L389)

Block helper that renders a block if `a` is **not equal to** `b`.
If an inverse block is specified it will be rendered when falsy.
Similar to [unlessEq](#unlesseq) but does not use strict equality for
comparisons.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{lt}}](lib/comparison.js#L411)

Block helper that renders a block if `a` is **less than** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `context` **{Object}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{lte}}](lib/comparison.js#L435)

Block helper that renders a block if `a` is **less than or equal to** `b`.

If an inverse block is specified it will be rendered when falsy.
You may optionally use the `compare=""` hash argument for the
second value.

**Params**

* `a` **{Sring}**
* `b` **{Sring}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{neither}}](lib/comparison.js#L456)

Block helper that renders a block if **neither of** the given values
are truthy. If an inverse block is specified it will be rendered
when falsy.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{}**: Handlebars options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{not}}](lib/comparison.js#L470)

Returns true if `val` is falsey. Works as a block or inline helper.

**Params**

* `val` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**

### [{{or}}](lib/comparison.js#L492)

Block helper that renders a block if **any of** the given values is truthy. If an inverse block is specified it will be rendered when falsy.

**Params**

* `arguments` **{...any}**: Variable number of arguments
* `options` **{Object}**: Handlebars options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

**Example**

```handlebars
{{#or a b c}}
  If any value is true this will be rendered.
{{/or}}
```

### [{{unlessEq}}](lib/comparison.js#L518)

Block helper that always renders the inverse block **unless `a` is
is equal to `b`**.

**Params**

* `a` **{String}**
* `b` **{String}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [{{unlessGt}}](lib/comparison.js#L538)

Block helper that always renders the inverse block **unless `a` is
is greater than `b`**.

**Params**

* `a` **{Object}**: The default value
* `b` **{Object}**: The value to compare
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Inverse block by default, or block if falsey.

### [{{unlessLt}}](lib/comparison.js#L558)

Block helper that always renders the inverse block **unless `a` is
is less than `b`**.

**Params**

* `a` **{Object}**: The default value
* `b` **{Object}**: The value to compare
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{unlessGteq}}](lib/comparison.js#L578)

Block helper that always renders the inverse block **unless `a` is
is greater than or equal to `b`**.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### [{{unlessLteq}}](lib/comparison.js#L598)

Block helper that always renders the inverse block **unless `a` is
is less than or equal to `b`**.

**Params**

* `a` **{any}**
* `b` **{any}**
* `options` **{Object}**: Handlebars provided options object
* `returns` **{String}**: Block, or inverse block if specified and falsey.

### date
### [{{isodate}}](lib/date.js)

Iso date helper that renders the following datetimes in iso format
1. **now** : Renders the current datetime
2. **today**: Renders the start time and date of today
3. **add**: Adds the given number of days to current date
4. **subtract**: Subtracts the given number of days from current date

**Params**

* `method` **{string}**
* `days` **{number}**
* `returns` **{String}**: Iso datetime string of the given method's result

### string
### [{{replaceregex}}](lib/string.js#L774)

String helper that replaces regex matches with given string

**Params**

* `str` **{string}**: Main string
* `regex` **{string}**: Regular expression
* `replaceWith` **{string}**: String to replace the regex matches in Main string
* `returns` **{String}**: Main string with regex matches replaced with string `replacedWith`. 