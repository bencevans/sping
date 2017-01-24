# sping

> strip a url to the host and ping

## Install

    $ npm install -g sping

## Usage

For when you copy an address from the browser and it's got all the gubbins.

    $ sping http://github.com/bencevans/sping
    PING github.com (192.30.253.112) 56(84) bytes of data.
    64 bytes from 192.30.253.112 (192.30.253.112): icmp_seq=1 ttl=47 time=126 ms
    64 bytes from 192.30.253.112 (192.30.253.112): icmp_seq=2 ttl=47 time=129 ms
    ^C
    --- github.com ping statistics ---
    2 packets transmitted, 2 received, 0% packet loss, time 999ms
    rtt min/avg/max/mdev = 126.802/127.963/129.124/1.161 ms

## Licence

MIT &copy; [Ben Evans](https://bencevans.io) 2016
