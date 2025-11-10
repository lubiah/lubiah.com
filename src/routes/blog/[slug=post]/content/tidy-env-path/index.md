---
title: Clean up your environment variables with a simple Ruby script
description: How to use Ruby to create a program to remove dead paths from your environment variable
excerpt: The more you install and uninstall softwares, the more your environment get filled with dead paths. Learn how to remove them
date: 2021-05-27
tags:
  - ruby
  - windows
---

<script>
  import image_example_of_dead_path from "./images/example_of_dead_path.jpg"
</script>

The more you install and uninstall software, the more your environment variables get filled with dead paths.

Just now, while I was looking through my environment variables for no apparent reason, I found some dead links. So, I decided to clean them up.

<figure>
  <img src="{image_example_of_dead_path}" alt="An example of a dead path in my environment variables">
  <figcaption>I uninstalled <a href="https://hyper.is/" target="_blank">Hyper terminal</a> a long time ago but its path is still in my environment variable</figcaption>
</figure>

## What is an Environment Variable

> An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. They are part of the environment in which a process runs. For example, a running process can query the value of the TEMP environment variable to discover a suitable location to store temporary files, or the HOME or USERPROFILE variable to find the directory structure owned by the user running the process

To explain further, an environment variable simply contains values which help processes to function. For example, to find the directory in which software is installed, you would refer to the `PROGRAMFILES` environmental variable which contains the path to the `Program Files` directory or to find your operating system's temporary directory, you would refer to the `TEMP` variable which contains the path to the operating system's temporary directory. Environmental variables can also store other information such as your computer's username or processor type.

## The Path Environment Variable

The `PATH` environment variable is one of the many available environment variables.
It is used by the system to locate the needed executable from the command line. So basically, when we type any command such as `dir` or `move` or `time`, the operating system will search through the paths in the environment variable `PATH` to locate the needed executable file, if it does not find it, then it returns the 'command not recognized' error.

## How does it get filled with dead paths?

Whenever we install software that comes along with an executable CLI, its path is added to the environment variable `PATH` to allow you to access the executable from wherever you are. However, when you uninstall the application, the added path is not removed from your environment variable, so the installing and uninstalling of software will make it end up with a chunk of dead paths.

This can affect the performance of your computer. When you execute a command the operating system searches through the paths listed in the `PATH` variable until it finds the executable. If there are many dead paths, the search can take longer.

## Cleaning it up...

We are going to create a simple Ruby script which will iterate through all the paths in the environment variable `PATH` and remove the dead links. 
In Ruby, all your environment variables are available under a single object called `ENV`. 
Use the code below to see all the environment variables in Ruby.

```ruby
require "pp"
pp ENV
```

This will print the environment variables plus their values.

The code for the script is below.

```ruby
require "win32/registry"

paths = ENV['path']
paths = paths.split(";")

valid = Array.new
valid_string = ""

paths.each do |x|
  valid.push(x) if Dir.exists? x
end

valid.each do |x|
  valid_string += "#{x};"
end

Win32::Registry::HKEY_CURRENT_USER.open('Environment',Win32::Registry::KEY_WRITE) do |reg|
  reg['path'] = valid_string
end
```

First of all, we imported the `:ruby:"win32/registry"` module. Then we assigned the environment variable `:ruby:ENV['path']` to a variable called `:ruby:paths`. This returns a string.

Then we split it by ';' since all the paths in the variable are concatenated and separated by ';'. This will turn the `:ruby:paths` variable into an array.
We then created a new array called `:ruby:valid` (_this is the array which will hold the valid paths_).
The `:ruby:valid_string` variable will also hold the stringified version of the `:ruby:valid` array.

Then to the iteration, we iterate through each item in the `:ruby:paths` array, and then we use `:ruby:Dir.exists?` to check if the path exists, if it does, it is added to the `:ruby:valid` array.
Then we iterate through the `:ruby:valid` array and add each path to the `:ruby:valid_string` variable.

In the next part, we open the registry and access the environment, we then assign our new environment variable and that's all.
Our environment variable is good as new😊.
