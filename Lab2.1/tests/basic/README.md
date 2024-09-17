# Overview

This sample test uses the [Power Platform Command Line Interface](https://learn.microsoft.com/power-platform/developer/cli/introduction) to validate that the Contoso Real Estate application has listings.

## Example


```pwsh
$env:user1Email = "user0Xcontoso.onmicrosoft.com"
$env:user1Password = ""
$env:testEnvironment = "b0bb5639-aad9-e131-8af7-0982fbe7f611"
$env:testTenant = "267f6445-1f21-41c0-b705-44cf9b5c5de8"

cd Lab2.1\tests\basic
pac test run  --test-plan-file .\testPlan.te.yaml --environment-id $env:testEnvironment --tenant $env:testTenant
```

NOTES:
1. This example assumes the test environment does not have multi factor authentication enabled
2. If Multfactor authentication is enabled then the the new versions of Test Engine provide alternative authentication options
3. Vew versions of Test Engine extend beyond this canvas app to also include support Model Driven Applications

## Context

The current version of the Test Engine that is integrated into the Power Platform Command Line Interface includes an earlier version of the testing capability. 

The open source [PowerApps-TestEngine](https://github.com/microsoft/PowerApps-TestEngine) contains a work in progress set of enhancements are in the process of being developed that will extend the test features that are available.

An overview of the [Architecture](https://github.com/microsoft/PowerApps-TestEngine/blob/grant-archibald-ms/docs/docs/Architecture.md) that discusses the overall planned approach and providers that enable testing beying the current pac test run features.
