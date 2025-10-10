---
title: "How I ended up running a DERP server in China"
description: A personal story of setting up a Tailscale DERP server in China, learning about ICP registrations, and building a stable Tailnet behind the firewall.
publicationDate: 2025-09-26
---

Last month I had a curious experience: learning how to register web services in China. It wasn’t a formal course, just the inevitable result of trying to set up my own personal cloud. Along the way, I discovered two very specific things:

1. The official registrations (ICP and cybersecurity) required for any online service in China.

2. How to set up Tailscale DERP servers inside the country—something you almost never need outside of China.

Today I won’t go into detail about those topics. Instead, I’d rather tell the story that led me there.

## Why get into this mess?

When I lived abroad, Dropbox or Google Drive worked perfectly for me. But here in China, those services are blocked, and the local alternatives come with plenty of downsides: tiny free tiers, no real folder sync, and aggressive business practices.

I tried Baidu Cloud, the market leader, but for foreigners it’s a nightmare: full-speed downloads for five minutes, then a crawl. That frustration pushed me to explore DIY options.

## Raspberry Pi, baby, and Tailscale

At first I considered a NAS: easy, powerful, but way too expensive for my needs. Then I tried a Raspberry Pi with external storage, but quickly ran into the problem of exposing services to the internet from China. Everything popular is blocked, and the local options weren’t appealing. My Pi ended up gathering dust in a drawer.

Around that time my daughter was born, so tech projects moved to the back burner. Months later I discovered Tailscale, and suddenly everything clicked: I could use my home server as if it were part of a local network, without much hassle. It felt like finding the missing piece of a puzzle.

The only catch: Tailscale’s global DERP servers don’t work well from inside China. Connections get unstable and slow after crossing the firewall.

## The need for a local DERP

That’s when I realized: to have a decent Tailnet in China, I needed to run my own DERP server inside the country. Aliyun has datacenters in Chengdu, so I jumped in.

But nothing here is instant. Before spinning up a VPS, you need to complete the official registrations. Without them, your server stays mute. That process turned out to be the real challenge. Once I cleared it, my local DERP server ran beautifully.

## What’s next…

The story has a happy ending: now my Tailnet is stable, and I learned a lot in the process. In the coming days I’ll publish two more posts: one about how the registrations work, and another with a hands-on tutorial for installing a DERP server in China.

For now, this was the story that got me here. And honestly, that alone made it worth writing.

Thanks for reading! 😄