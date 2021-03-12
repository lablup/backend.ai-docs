---
id: overview
title: Manager API
slug: .
---

Backend.AI's Manager API consists of two sets of APIs in different flavors: **REST** and **GraphQL**.

Historically the REST API is for non-privileged operations and the GraphQL API is for privileged (admin-only) operations.
However, we are gradually rewriting complex (non-privileged) queries using GraphQL in favor of client-side selection of retrieved fields and optimization as well as skipping of un-requested fields by [the graphene resolver framework](https://graphene-python.org/), which provides round-trip efficiency and easier legacy support.

