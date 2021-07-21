# Passing SSH publick key into github account settings
## Wherefore:
This script is usefull for quick passing of public ssh key from your server terminal to github account
## Using:
git clone git@github.com:AndreyKirichenko/add-ssh-public-key-to-github.git

cd add-ssh-public-key-to-github

yarn && yarn start
### Also you can pass login and password using params:
yarn && yarn start --u someGithubUserName --p someGithubPassword
## Attention:
This script can be broken if github team changes markup. 

Write me andrey.kirichenko999@gmail.com
