---
title: Caesar cypher code in Ruby
description: How to encrypt or decrypt your data using the Caesar cypher in Ruby
date: 2021-09-16
tags:
  - ruby
---

<!-- TODO: Rewrite article -->

We are going to make a simple programme that will encrypt our data using the Caesar cypher.

## What is the Caesar Cypher?

The Caesar cypher is a sort of substitution cypher in which each letter in the plaintext is replaced by a letter at a set number of alphabet places. The key is the number of set locations down the alphabet. Because [Julius Caesar](https://en.wikipedia.org/wiki/Julius_Caesar) invented it, it was named after him.

## How It Works

As I previously stated, each letter is relocated to some set locations down the alphabet during encryption. So, given a key of 3, if we want to encipher the letter A, we shift it down three characters and get D, C gets F, and so on... The reverse technique will be used to decipher or decrypt. The key will determine the number of times we count the letters backwards. So, with a key of 5, we can interpret A by counting 5 letters backwards and getting V.

## Writing the algorithm in Ruby

Because I'm learning Ruby, I determined that it would be the ideal language to use because it will help me grasp it better, plus Ruby is a straightforward language to learn. We'll choose an object-oriented approach because it will make things easy for us and is also the best way.

```ruby
class Caesar
  @@UPPERCASE_LETTERS = ("A".."Z").to_a
  @@LOWERCASE_LETTERS = ("a".."z").to_a

  attr_accessor :key #This allows us to get and set the key without creating methods

  def initialize(key)
    @key = key
  end

  def encrypt(text)
    encrypted = ""
    text.split("").to_a.each do |x|
      if @@UPPERCASE_LETTERS.include? x
        encrypted += @@UPPERCASE_LETTERS[ (@@UPPERCASE_LETTERS.index(x) + key) % 26]
      elsif @@LOWERCASE_LETTERS.include? x
        encrypted += @@LOWERCASE_LETTERS[ (@@LOWERCASE_LETTERS.index(x) + key) % 26]
      else
        encrypted += x
      end
    end
    return encrypted
  end


  def decrypt(text)
    decrypted = ""
    text.split("").to_a.each do |x|
      if @@UPPERCASE_LETTERS.include? x
        decrypted += @@UPPERCASE_LETTERS[ (@@UPPERCASE_LETTERS.index(x) - key) % 26]
      elsif @@LOWERCASE_LETTERS.include? x
        decrypted += @@LOWERCASE_LETTERS[ (@@LOWERCASE_LETTERS.index(x) - key) % 26]
      else
        decrypted += x
      end
    end
    return decrypted
  end
end
```

The code above is the Caesar cipher in Ruby. So let me explain parts of the code. The encrypt and decrypt method is similar so the explanation is the same for all.

- The method receives text as its argument

- It then converts the text into an array and iterates over each character

- In each iteration:

  - We check if the character is included in either of the `@@LOWERCASE_LETTERS` or `@@UPPERCASE_LETTERS` array with the use of the `:ruby:.include?` the method which takes the character as the argument

  - Then, we try to find the index of the character using `:ruby:array.index(character)`, which will return the numerical index of the letter.

  - Now, since when we add the key, it will make the array larger than its length, we need to find the modular 26 (length of the array) of the `:ruby:(array.index(character) + key)` , this will make sure the number which we will receive is less than the length of the array.

  - We then use the number we received as an index to fetch the encrypted character.

## Using The Cipher

So to use the class we just created, we need to create an instance of it. 
Remember that the class takes the key as the constructor.

```ruby
cipher = Caesar.new(5)
puts cipher.encrypt("Sentence") #=>Pbkqbkzb
puts cipher.decrypt("Pbkqbkzb") #=> Sentence

```
