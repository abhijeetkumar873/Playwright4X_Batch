# JavaScript String `charAt()` vs `at()`

`charAt()` and `at()` are JavaScript string methods that retrieve a UTF-16 code unit at a given position. They are similar for ordinary non-negative indexes, but differ in how they handle negative and out-of-range indexes.

> The method names are **`charAt`** and **`at`**. `chatAt` and `crate` are not JavaScript string methods.

## 1. String indexes are zero-based

The first position in a string has index `0`, not index `1`.

```js
const text = "abc";

// Character: a  b  c
// Index:     0  1  2
```

## 2. Syntax

```js
string.charAt(index);
string.at(index);
```

Call the method using parentheses and provide an index. The index is optional; when omitted, it behaves like index `0`.

```js
const text = "abc";

text.charAt(0); // "a"
text.at(0);     // "a"

text.charAt();  // "a" — omitted index defaults to 0
text.at();      // "a" — omitted index defaults to 0
```

## 3. Main differences

| Behavior | `charAt(index)` | `at(index)` |
|---|---|---|
| Positive index | Reads from the start of the string | Reads from the start of the string |
| Negative index | Returns `""` (empty string) | Counts backward from the end |
| Index past either end | Returns `""` | Returns `undefined` |
| Return when a position exists | A string containing one UTF-16 code unit | A string containing one UTF-16 code unit |
| Return when no position exists | `""` | `undefined` |
| Introduced | Long-established JavaScript method | ECMAScript 2022 (ES13) |

## 4. Side-by-side example

```js
const str = "abc";

console.log("Index 1:");
console.log("charAt:", str.charAt(1)); // "b"
console.log("at:    ", str.at(1));     // "b"

console.log("Index -1:");
console.log("charAt:", JSON.stringify(str.charAt(-1))); // "" (empty string)
console.log("at:    ", str.at(-1));                     // "c"

console.log("Index 3 (past the end):");
console.log("charAt:", JSON.stringify(str.charAt(3))); // "" (empty string)
console.log("at:    ", str.at(3));                     // undefined
```

Expected output:

```text
Index 1:
charAt: b
at:     b
Index -1:
charAt: ""
at:     c
Index 3 (past the end):
charAt: ""
at:     undefined
```

At index `1`, both methods return `"b"`. At index `-1`, `at()` returns the last character, `"c"`, whereas `charAt()` returns an empty string. At index `3`, which is outside `"abc"`, `charAt()` returns an empty string and `at()` returns `undefined`.

`JSON.stringify()` is used for the `charAt()` examples so the empty string is visible in the output. Without it, logging `""` can look like nothing was printed.

## 5. How negative indexes work

`at()` counts negative indexes from the end of the string:

```js
const text = "abc";

text.at(-1); // "c" — last character
text.at(-2); // "b" — second-to-last character
text.at(-3); // "a" — third-to-last character
text.at(-4); // undefined — before the beginning
```

`charAt()` does not count backward. A negative index returns an empty string:

```js
const text = "abc";

text.charAt(-1); // ""
text.charAt(-2); // ""
```

## 6. Indexes outside the string

An index from `0` through `string.length - 1` is in range. An index at or beyond `string.length` is past the end.

```js
const text = "abc";

text.charAt(2); // "c"
text.at(2);     // "c"

text.charAt(3); // ""
text.at(3);     // undefined
```

The same distinction applies to an index before the beginning: `charAt()` returns `""`; `at()` returns `undefined` if the negative index is beyond the string's length.

### Checking whether a character was found

Check for `undefined` when using `at()`:

```js
const character = "abc".at(3);

if (character === undefined) {
  console.log("There is no character at that position");
}
```

Check for an empty string when using `charAt()`:

```js
const character = "abc".charAt(3);

if (character === "") {
  console.log("There is no character at that position");
}
```

## 7. What happens to the index argument?

Both methods convert the supplied index to an integer, truncating any fractional part toward zero. For example, `1.8` is treated as `1`, and `-1.8` is treated as `-1`.

```js
const text = "abc";

text.charAt(1.8); // "b" — treated as index 1
text.at(1.8);     // "b" — treated as index 1

text.charAt(-1.8); // ""
text.at(-1.8);     // "c" — treated as index -1
```

An omitted index, or an index of `undefined`, is treated as `0`. Values such as `NaN` also convert to index `0`; indexes that remain outside the string produce the method's usual out-of-range result.

```js
const text = "abc";

text.charAt(undefined); // "a"
text.at(undefined);     // "a"
text.charAt(NaN);       // "a"
text.at(NaN);           // "a"
```

For beginner code, it is best to pass a clear integer index rather than depend on automatic conversion.

## 8. Empty-string behavior

An empty string has no valid character index:

```js
"".charAt(0);  // ""
"".at(0);      // undefined

"".charAt(-1); // ""
"".at(-1);     // undefined
```

## 9. Important syntax: method vs method call

This calls `at()` and returns the character at index `1`:

```js
const character = "abc".at(1);
console.log(character); // "b"
```

This only accesses the method function. It does not call the method or return a character:

```js
const getCharacter = "abc".at;
```

These are misspelled method names and will cause a `TypeError` when called:

```js
"abc".chatAt(1); // TypeError: chatAt is not a function
"abc".crate(1);  // TypeError: crate is not a function
```

## 10. Unicode and emoji caveat

JavaScript string indexes count **UTF-16 code units**. A UTF-16 code unit is not always the same as a complete visible character. Many emoji are represented by two code units:

```js
const face = "😀";

console.log(face.length);                  // 2
console.log(JSON.stringify(face.charAt(0))); // A lone surrogate, displayed escaped by JSON.stringify
console.log(JSON.stringify(face.at(0)));     // A lone surrogate, displayed escaped by JSON.stringify
```

`at()` supports negative indexing, but it does not change how JavaScript represents or indexes Unicode text. To iterate a string by Unicode code points, use `for...of`:

```js
for (const character of "A😀") {
  console.log(character); // "A", then "😀"
}
```

Some user-perceived characters, such as a family emoji or a character made from a base letter plus combining marks, can contain multiple code points too. `for...of` handles code points, but it does not group every multi-code-point sequence into a single displayed character.

## 11. Which method should you use?

- Use **`at()`** when negative indexing is useful, especially to get the last character with `text.at(-1)`.
- Use **`charAt()`** if the JavaScript environment you need to support does not provide `String.prototype.at()`.
- For regular non-negative indexes, either method works. Choose deliberately because their out-of-range results differ.
- If you need complete user-perceived characters (grapheme clusters), neither method alone is sufficient.

## 12. Quick recap

```js
const text = "abc";

text.charAt(1); // "b"
text.at(1);     // "b"

text.charAt(-1); // ""
text.at(-1);     // "c"

text.charAt(3); // ""
text.at(3);     // undefined
```

**In one sentence:** `at()` supports negative indexes and returns `undefined` for an out-of-range index; `charAt()` does not support negative indexing and returns an empty string for negative or out-of-range indexes.
