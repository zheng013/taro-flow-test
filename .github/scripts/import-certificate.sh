#!/bin/bash

set -euo pipefail

security create-keychain -p "" build.keychain
security list-keychains -s build.keychain
security default-keychain -s build.keychain
security unlock-keychain -p "" build.keychain
security set-keychain-settings
echo $SIGNING_CERTIFICATE_P12_DATA | base64 --decode > yuduoduo.p12
security import yuduoduo.p12 \
                -f pkcs12 \
                -k build.keychain \
                -P $SIGNING_CERTIFICATE_PASSWORD \
                -T /usr/bin/codesign
security set-key-partition-list -S apple-tool:,apple: -s -k "" build.keychain