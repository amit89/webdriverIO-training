# Initail webdriverio setup steps

    npm inint wdio .

# Run the testcases

    npm run wdio &

# Run the the particular suite

    npx wdio run ./wdio.conf.js --suite suite_name

# Generate allure repor

    allure generate allure-results --clean -o allure-report
    allure open allure-report

# Project structure

'''

.
├── ./README.md
├── ./package-lock.json
├── ./package.json
├── ./page-object
│ ├── ./page-object/base-page.js
│ ├── ./page-object/login-page.js
│ └── ./page-object/profile-page.js
├── ./project_structure.txt
├── ./test
│ └── ./test/specs
│ ├── ./test/specs/login.failure.spec.js
│ └── ./test/specs/login.success.spec.js
├── ./test-data
│ └── ./test-data/user-info.json
├── ./wdio.conf.js
└── ./wdio.dev.conf.js

'''
