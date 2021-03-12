---
id: auth
title: Authentication
slug: auth
---

From the perspective of a client, the Manager API has two modes of authentication:
* KeyPair: A client can make signed API requests using the pre-shared API keypair which saves an extra round-trip for login.
* Session: A client must attach session cookies to every API request.  The cookie is created using the login API with user-provided credentials, just like when using the web GUI.

The difference originates from how the server-side is configured.
If the server setup does not have the Backend.AI Web Server service, only the keypair mode is available.

:::info
Both the REST API and the GraphQL API shares the same authentication method.
:::
