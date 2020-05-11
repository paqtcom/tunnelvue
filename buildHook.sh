#!/bin/bash
path=$1

if [ -z "$path" ] || [ ! -d "$path" ]; then
    echo "usage: ./buildHook.sh pathProjectRoot"
    echo "for example: ./buildHook.sh \$PWD"
    exit
fi

if [ -f ~/.nvm/nvm.sh ]; then
    . ~/.nvm/nvm.sh
fi

echo "====== Running build hook ======="

if [ -f package.json ]; then
    find . -maxdepth 1 -name package.json | grep package > /dev/null 2>&1
    if [ $? == 0 ]; then
        echo "= NPM ="
        npm ci
        if [ $? != 0 ]; then
            exit 1
        fi
    fi

    if [ $2 ]; then
        echo "= Build dev ="
        npm run build-dev
    else
        echo "= Build production ="
        npm run build
    fi
    if [ $? != 0 ]; then
        exit 1
    fi
else
    echo "Package.json doesn't exist"
fi

echo "================================="
