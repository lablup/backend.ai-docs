---
id: cloud
title: Cloud API
slug: cloud
---

https://cloud.backend.ai offers both the API and Web GUI service.
If you access it using a web browser, it will serve the web GUI.
If you make API requests against it, it will treat them as a session-mode API requests.

The cloud API is a superset of the open-source API described in this documentation.

## API KeyPair Registration

Simply create an account at [cloud.backend.ai](https://cloud.backend.ai) and generate a new API keypair.
You may also use social accounts for log-ins such as Twitter, Facebook, and GitHub.

An API keypair is composed of a 20-characters access key (`AKIA...`) and
a 40-characters secret key, in a similar form to AWS access keys.

Currently, the service is BETA: it is free of charge but each user is
limited to have only one keypair and have up to 5 concurrent sessions
for a given keypair. Keep you eyes on further announcements for upgraded
paid plans.

## Accessing Admin APIs

The admin APIs require a special keypair with the admin privilege:

- The public cloud service (`api.backend.ai`): It currently does *not*
  offer any admin privileges to the end-users, as its functionality is
  already available via our management console at
  [cloud.backend.ai](https://cloud.backend.ai).
- On-premise installation: You will get an auto-generated admin
  keypair during installation.
