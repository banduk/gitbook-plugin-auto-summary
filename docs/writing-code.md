# WRITING CODE

## EDITORS ---- TODO: ROSS/CHRIS

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nisl quis eros dictum convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum orci eu rhoncus rutrum.

## VERSION CONTROL

We use GitHub as our version control system, simply because it is the best and most integrated platform out there.

Our GitHub repositories live under the ‘madeagency’ organisation and follow the naming convention:

Projects must start with the "client code", which is derived as follows:

If its one word, its the first three letters of the singular word.
If its two words, its the first letter from the first word, and the first two letters from the second word.
If its three words, its the first leeter from each of the words.

For example:

Made (mad)
Ribyt (rib)
Inner City Ideas Cartel (ici)
Cartel House (cho)

### New Repository

client-code-lowercase-with-hyphens (Ex: mad-website)

### New Versions

client-code-lowercase-with-hyphens-vversion (Ex: mad-website-v2)

Every project is _required_ to have a README.md that adheres to the following structure: https://gist.github.com/chriscapetown/66b9eef2aa0c500e8720aeb1ec99b2fc. We believe this is valuable to everyone in the team in order to quickly get acquainted with any new projects.

These README files must also contain the code climate score, which is done by adding a snippet like the below to the header of the file.

[![Code Climate](https://codeclimate.com/repos/584e94e09e4da12533006624/badges/70d817de22ad08a428d4/gpa.svg)](https://codeclimate.com/repos/584e94e09e4da12533006624/feed)

\*You will need to login to Code Climate to get the Embed code.

## GIT WORKFLOW

We use the Feature Branch approach to git branch control.

By default, each repository will always have a 'master' branch and 'develop' branch. The master branch is considered stable and will always reflect the production environment through continuous integration.

Features, chores and fixes will be branched from the 'develop' branch with the following convention:

> category/name

With *category* being one of:
 - `feature` - addition of new features or changes
 - `fix` - bug fixes
 - `chore` - technical chores

Some examples:
  - `feature/payment-compliance`
  - `fix/client-table-not-responsive`
  - `chore/upgrade-react`
  - `chore/refactor-report-controller`

All merging is done via pull request which must always be accompanied by a description and code reviewed by a peer.

Non-major branches must be deleted once the related feature or fix has passed QA.

## PULL REQUESTS AND HOW THEY ARE HANDLED

All pull requests require some form of review from one of our peers. Its a process that is used to ensure quality, and also a learning process as one could get different insight into how to deal with a problem from another developer. Please do not merge anything unless it has someone in the team's stamp of approval.

When issuing a new pull request, make sure to have a descriptive title, enough so that the person reviewing can see what was completed in a nutshell.
Also be sure to include a description as to give a more detailed overview of the feature/bug. This way, anyone in the team should be able to pick it up, understand what the pull request is about, and be able to give a good review on it.

Keep pull requests as small as possible. If you are working on a huge feature set, break it up into smaller deliverables, each with its own pull request, as it makes it easier to review versus having a 50+ file changed one.

When assigning a reviewer, do so using GitHub, as well as posting the individual a message in slack in the relevant channel to the project. This is so that there is maximum visibility so that nothing will get missed and work won't get held up.

Be sure to keep all conversations regarding the pull request on GitHub. This is for record keeping purposes so that, if required, one can come back to the original pull request in the future if understanding is required surrounding a certain feature/method/class/etc.

If the repository has CI integrated, ensure that all tests pass first before issuing the pull request, as it saves a lot of time and back and forth.

Once the pull request has been reviewed and approved, it is the responsibility of the person who issued the pull request to merge it into the base branch.

## STYLEGUIDE -- TODO: ROSS & MARKUS & PETE

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nisl quis eros dictum convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum orci eu rhoncus rutrum.

## COVERAGE - TODO: ROSS & MARKUS & PETE

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nisl quis eros dictum convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum orci eu rhoncus rutrum.

## TESTING - TODO: ROSS & MARKUS & PETE

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nisl quis eros dictum convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum orci eu rhoncus rutrum.

## OPEN SOURCE

As an ongoing endeavour to contribute back to the development community, as well as to better position MADE and its developers, this Open-Source policy is set to outline the processes and standards required to regularly contribute, and maintain such contributions.  

### Why are we open-sourcing?

- To contribute back to the community and help out where we can. 
- Ensures that our skills developers and that we strive and maintain a higher code standard. 
- To showcase our stellar work. 
- To better position MADE and yourselves as experts in the field. 

### Where will our contributions live? 

All our Open-Source endeavours will live on GitHub under the Made Agency account - www.github.com/madeagency . 

### What does a package look like?

Each package will have a collection of relevant source files and assets, and be accompanied by thorough documentation saved as Readme.md.

The documentation serves the purposes of detailing out the library, its purpose, its functions, how it was structured as well as guide users on how to integrate it into their projects.

Packages will be in the form of Gems for Ruby projects, and NPM modules for Javascript. 
Some good references:

https://github.com/bevacqua?tab=repositories
https://github.com/sindresorhus 
https://github.com/sindresorhus/rename-fn

Some bigger ones with bigger projects than our scale:

http://airbnb.io/projects/ 
https://github.com/walmartlabs 
https://engineering.twitter.com/opensource
https://code.facebook.com/projects/

### Code Standards

By setting standards and guidelines for all of the code written at Made we set a precedent for any portions of code that might be open source. Aside from language specific considerations, there are some passive qualities which our code should always aim to achieve:
#### Readable
Well documented when readability is sacrificed for performance.
#### Neat & well structured
Consistent indentation, block spacing and managed line run-on.
#### Abstracted by necessity, not for abstractions sake
Not over abstracted
Not abstracted too early
Abstracted logically, not restrictively 
#### Modular, extensible and well architected
We make decisions based on an accepted set of responsibilities that a specific portion of code should achieve.
Simple and restrictive within responsibilities.
Small functions, small files, etc.

Projects must adhere to the guidelines for that specific package environment (npm, gem, etc.) and these guidelines must be made available to the public.

Any contributions to the project should go through the standard pull request/code review process.

### When do we get to work on open-source? 

Development, contribution and maintenance of Open-Source projects needs to be a continuous, almost passive process. During the ‘off-peaks’ hours of each work day (09:00-10:00 and/or 16:00-17:00), you are to allocate 45-90 minutes of your time working on your existing Open-Source targets, whilst also checking in on live projects for any new pull requests, bugs, feature suggestions or support questions.  
### What will we be open-sourcing?

Small-to-medium scale features that arise during our projects and can be generically packaged as their own npm modules or gems for other usage. 

During Sprint Planning, prior to working on new challenges and user stories, we will highlight features (or rather, our proposed solutions for them) that we think would be beneficial to open-source after we’ve implemented them for their respective project. 

### Contribution to existing open-source projects

### How do we maintain our libraries?

Once a package has been deployed to our GitHub account, the onus is on the developer responsible to maintain it going forward, by following this checklist:

Regularly check in for any new interactions with the package
Answer all questions from community (support or otherwise)
Consider all feature suggestions in a generic sense, ensuring there’s enough cases for it to justify a solution for it beyond the initial project requirements.
Fix bugs as they arise to avoid them piling up.
Merge pull requests that are of standards and beneficial to the library. 
Communicate politely with community to encourage healthy discussions.
Update documentation based on FAQ (will help reduce common support questions).
Provide reliable and consistent developers with the rights to evolve the library further on their own accord (without having to make pull-requests).  

Some references on how to maintain your library:

https://ponyfoo.com/articles/maintainable-oss
https://github.com/bevacqua/dragula/issues 

### Consideration 

Any open source should be created under the madeagency organization and adhere to internal development standards.

All open source projects are to be licensed under the MIT License model and should indicate the copyright and copyright holder in the footer of the README.MD file on GitHub.

### README & LICENCE

Every open source project must have a comprehensive README.MD attached to it. The footer of which should always contain:

It should also include the Code Climate score in the header of the README.

README.MD
```markdown
License
-------

{NAME} is © 2016 MADE Code PTY Ltd.
It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: LICENSE

Maintained by
----------------

[![madeagency](https://www.made.co.za/logo.png)](https://www.made.co.za?utm_source=github)

{NAME} was created and is maintained MADE Agency PTY Ltd.
The names and logos for MADE Code are trademarks of MADE Code PTY Ltd.

We love open source software. See our [Github Profile](https://github.com/madeagency) for more.

We're always looking for talented people who love programming. [Get in touch] with us.

[Get in touch]: https://www.made.co.za?utm_source=github
```

LICENCE
```markdown
Copyright (C) 2016 MADE Code PTY Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## ECOMMERCE

We've been through a number of e-commerce setups over the years. From Shopify to WooCommerce to custom developments, we didn't like any of them.

Our typical ecommerce approach will be using the Rails project called Solidus, previously Spree. It's dynamic, flexible, fully featured and nice to work with.

TODO: To be expanded upon soon and link to https://drive.google.com/open?id=1U8HjMhPNKdDj40WFV0C74N8EAeuSY4k96NGQkn1Rb3M
