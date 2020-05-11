#!/bin/bash
path=$1

if [ -z "$path" ] || [ ! -d "$path" ]; then
    echo "usage: ./lintHook.sh pathProjectRoot"
    echo "for example: ./lintHook.sh \$PWD"
    exit
fi

if [ -f ~/.nvm/nvm.sh ]; then
    . ~/.nvm/nvm.sh
fi

echo "====== Running linters ======="

if [ -f package.json ]; then
    find . -maxdepth 1 -name package.json | grep package > /dev/null 2>&1
    if [ $? == 0 ]; then
        echo "= NPM ="
        npm ci
        if [ $? != 0 ]; then
            exit 1
        fi
    fi

    echo "= Lint ="
    npm run lint
    if [ $? != 0 ]; then
        exit 1
    fi
else
    echo "Package.json doesn't exist"
fi

echo "================================="
