---
title: License
description: License of the robotiq.github.io website and of the content it shows.
---

# License

## This site

The source code and text of this website are licensed under the
BSD 3-Clause License. See the
[`LICENSE`](https://github.com/robotiq/robotiq.github.io/blob/main/LICENSE)
file at the root of the repository for the full text.

Images, and the Robotiq name and logo, are excluded: that license does not
grant any rights to them. See [Logos and trademarks](#logos-and-trademarks).

## Software tools index

The [Software Tools](/software-tools) page shows the Robotiq GitHub
organization's landing page,
[`robotiq/.github`'s `profile/README.md`](https://github.com/robotiq/.github/blob/main/profile/README.md),
which is licensed under that repository's own
[`LICENSE`](https://github.com/robotiq/.github/blob/main/LICENSE).

The software tools it lists are not part of this site. Each one, whether
maintained by Robotiq or by a third party, is distributed under its own
license; see each tool's repository for its terms. This site does not
bundle or redistribute any of them, it only links to them.

## Third-party packages

This site is built with open-source npm packages, each under its own
license: see
[`package.json`](https://github.com/robotiq/robotiq.github.io/blob/main/package.json)
for its direct dependencies and
[`package-lock.json`](https://github.com/robotiq/robotiq.github.io/blob/main/package-lock.json)
for the full tree. None of its production dependencies, direct or
transitive, carry a copyleft license (GPL, AGPL, LGPL, SSPL, or BUSL-1.1):
every pull request checks them against a permissive-license allowlist.

## Logos and trademarks

The home page uses third-party logos to identify the technologies Robotiq
tools integrate with. They are used for identification purposes only and
remain the property of their respective owners:

| Logo | File | Source |
|---|---|---|
| C++ | `cpp_logo.svg` | Standard C++ Foundation ([isocpp/logos](https://github.com/isocpp/logos)), used under its [terms of use](https://isocpp.org/home/terms-of-use) |
| Python | `python-logo-master-v3-TM-flattened.png` | Python.org's own brand kit |
| ROS | `ros2.webp` | Open Robotics / ROS |

Robotiq product images and the Robotiq name and logo belong to Robotiq.
Images on the Software Tools page, such as badges, are served by third
parties.

## Keeping this page current

Review this page whenever an image is added to the site, and at least
once a year.
