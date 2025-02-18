# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.2.4](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.3...v4.2.4) (2022-03-19)


### Bug Fixes

* **perfs:** split keys computation into smaller functions ([5aba888](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/5aba8888cf132be241ef8a1ced7a83bfb1a626cb))





## [4.2.3](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.2...v4.2.3) (2022-03-18)


### Bug Fixes

* **etag:** send a 304 (Not Modified) when valid If-None-Match header contains multiple values ([ccf936a](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/ccf936a02fbbb04a13bcf8143dd6009a3d1148c5))





## [4.2.2](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.1...v4.2.2) (2022-03-15)

**Note:** Version bump only for package @strapi-plugin-rest-cache/playground-memory





## [4.2.1](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.0...v4.2.1) (2022-03-11)

**Note:** Version bump only for package @strapi-plugin-rest-cache/playground-memory





# [4.2.0](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.1.0...v4.2.0) (2022-03-09)


### Features

* expose new clearByUid and clearByRegexp functions in cacheStore service ([c7d67fd](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/c7d67fd532ccca66df90b3621061ba2d65b70fe1))





# [4.1.0](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.6...v4.1.0) (2022-03-05)

**Note:** Version bump only for package @strapi-plugin-rest-cache/playground-memory





## [4.0.6](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.5...v4.0.6) (2022-03-02)

**Note:** Version bump only for package @strapi-plugin-rest-cache/playground-memory





## [4.0.5](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.4...v4.0.5) (2022-03-02)

**Note:** Version bump only for package @strapi-plugin-rest-cache/playground-memory





## [4.0.4](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.3...v4.0.4) (2022-02-26)

**Note:** Version bump only for package @strapi-plugin-rest-cache/playground-memory





## [4.0.3](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.2...v4.0.3) (2022-02-26)

**Note:** Version bump only for package @strapi-plugin-rest-cache/playground-memory





## [4.0.2](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.1...v4.0.2) (2022-02-24)

**Note:** Version bump only for package @strapi-plugin-rest-cache/playground-memory





## [4.0.1](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.0...v4.0.1) (2022-02-24)


### Bug Fixes

* empty npm packages ([1fde26a](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/1fde26a1da956c854661b036bc48483c49f9f75e))





# [4.0.0](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.0-alpha.1...v4.0.0) (2022-01-31)

**Note:** Version bump only for package @strapi-plugin-rest-cache/playground-memory





# [4.0.0-alpha.1](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.0-alpha.0...v4.0.0-alpha.1) (2022-01-31)


### Bug Fixes

* peerDependencies fixed version ([f43ef96](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/f43ef96b87c274618ecd041b733ecfa22c824c74))





# [4.0.0-alpha.0](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v1.0.1-alpha.0...v4.0.0-alpha.0) (2022-01-31)


* feat(core)!: add keys alterations options ([a4214f2](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/a4214f2fb90259400c1c5a9701b83221ac2fa1bb))


### BREAKING CHANGES

* move headers to keys.useHeaders
add keys.useQueryParams option
