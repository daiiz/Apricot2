#!/bin/sh

# scan.sh (@/)
#   /zumen/$1.png
#   --> /scanner/tmp/$1.az      カラー区画マップ
#   --> /scanner/tmp/$1.u
#   --> /scanner/tmp/$1.div
#   --> /zumen/$1.js
# Apricot 2.0 --version 0.0.1

# Apricot Beta を移植
if [ $# == 1 ]; then
    python scanner/make_az.py zumen/$1.png > scanner/tmp/$1.az
    python scanner/make_u.py scanner/tmp/$1.az > scanner/tmp/$1.u

    # Apricot 2.0
    #   Apricot Zumen Model をつくる
    python scanner/make_azm.py scanner/tmp/$1.az > zumen/$1.js
    /bin/echo -n 'Scanned Zumen: "'$1'".'
fi
