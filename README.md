# Terraform Bridge Provider Boilerplate

This repository contains boilerplate code for building a new Pulumi provider which wraps an existing
Terraform provider, if the existing provider uses _Go Modules_.

Modify this README to describe:

- The type of resources the provider manages
- Add a build status image from Travis at the top of the README
- Update package names in the information below
- Add any important documentation of concepts (e.g. the "serverless" components in the AWS provider).

## Creating a Pulumi Terraform Bridge Provider

*Note: Go 1.12 is needed to build Pulumi providers using Go Modules. Currently, we recommend pinning the version in `.travis.yml` to `1.12.1` to work around an issue with running later versions on Travis CI.*

First, clone this repo with the name of the desired provider in place of `grafana`:

```
git clone https://github.com/pulumi/pulumi-tf-provider-boilerplate pulumi-grafana
```

Second, replace references to `grafana` with the name of your provider:

```
make prepare NAME=foo REPOSITORY=github.com/pulumi/pulumi-foo
```

Next, list the configuration points for the provider in the area of the README.


> Note: If the name of the desired Pulumi provider differs from the name of the Terraform provider, you will need to carefully distinguish between the references - see https://github.com/pulumi/pulumi-azure for an example.

### Add dependencies

In order to properly build the sdks, the following tools are expected:
- tf2pulumi (See the project's README for installation instructions: https://github.com/pulumi/tf2pulumi)
- pandoc (`brew install pandoc`)

In the root of the repository, run:

- `go get github.com/pulumi/scripts/gomod-doccopy` (Note: do not set `GO111MODULE=on` here)
- `GO111MODULE=on go get github.com/pulumi/pulumi-terraform@master`
- `GO111MODULE=on go get github.com/terraform-providers/terraform-provider-grafana` (where `grafana` is the name of the provider)
- `GO111MODULE=on go mod vendor`
- `make ensure`

### Build the provider:

- Edit `resources.go` to map each resource, and specify provider information
- Enumerate any examples in `examples/examples_test.go`
- `make`

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/xyx

or `yarn`:

    $ yarn add @pulumi/xyx

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_xyx

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/j-maxi/pulumi-grafana/sdk/go/...

## Configuration

The following configuration points are available for the `grafana` provider:

- `grafana:apiKey` (environment: `XYZ_API_KEY`) - the API key for `grafana`
- `grafana:region` (environment: `XYZ_REGION`) - the region in which to deploy resources

## Reference

For detailed reference documentation, please visit [the API docs][1].


[1]: https://pulumi.io/reference/pkg/nodejs/pulumi/x/
