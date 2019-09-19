module github.com/j-maxi/pulumi-grafana

go 1.12

replace (
	github.com/Nvveen/Gotty => github.com/ijc25/Gotty v0.0.0-20170406111628-a8b993ba6abd
	github.com/golang/glog => github.com/pulumi/glog v0.0.0-20180820174630-7eaa6ffb71e4
	github.com/nytm/go-grafana-api => github.com/j-maxi/go-grafana-api v0.0.0-20190918000320-cfd56d17096c
)

require (
	github.com/hashicorp/terraform v0.12.7
	github.com/j-maxi/terraform-provider-grafana v1.5.1-0.20190918005151-e7259b432aaa
	github.com/pkg/errors v0.8.1
	github.com/pulumi/pulumi v0.17.28-0.20190731182900-6804d640fc7c
	github.com/pulumi/pulumi-terraform v0.18.4-0.20190914112649-fc132172e90d
	github.com/pulumi/scripts v0.0.0-20190914160500-e52bb56dbc41 // indirect
	github.com/stretchr/testify v1.3.1-0.20190311161405-34c6fa2dc709
	github.com/terraform-providers/terraform-provider-grafana v1.5.0 // indirect
	golang.org/x/net v0.0.0-20190620200207-3b0461eec859 // indirect
	golang.org/x/xerrors v0.0.0-20190717185122-a985d3407aa7 // indirect
)
