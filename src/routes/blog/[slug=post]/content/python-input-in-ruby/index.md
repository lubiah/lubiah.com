---
title: Making the Python input function in Ruby
description: A Ruby tutorial for implementing Python's input function. The input function collects user input
tags:
  - python
  - ruby
date: 2021-04-05
---

The syntax of the programming language [Ruby](https://www.ruby-lang.org/en/) is similar to that of [Python](https://www.python.org/).
I was impressed by Ruby’s simplicity when I initially started learning it.
I wanted several of Python’s functions in Ruby due to the similarities in syntax.
I intended to implement the `input` function.
The rationale was that, unlike Python, Ruby needs the usage of both `puts` and `gets` if you wish to gather user input while displaying text.

## Creating our function

Well, creating this function in Ruby is very simple.

```ruby
def input(prompt ='')
    puts prompt
    return gets
end
```

The function was designed to work in the same way as Python's.
The prompt argument is an optional parameter for the input function. On the following line, the `puts` function prints the prompt to stdout, and the `gets` method retrieves and returns any user input.

## Trying out the function

To use the method we just created, ensure the code is in the same file as the one you are working with.

```ruby
name = input("What is your name?")
print "Hello " + name
```

After testing the function, you can see that it works just like how Python's `input` function works.
