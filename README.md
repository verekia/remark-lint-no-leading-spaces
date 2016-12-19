# `no-leading-spaces` external rule for [remark-lint](https://github.com/wooorm/remark-lint)

A remark-lint external rule to warn about any leading whitespace.

```
`·` represents ` `.

<!-- Invalid -->

# Title

··Hello world!

<!-- Valid -->

# Title

Hello world!

```
