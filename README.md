# Initail webdriverio setup steps

    npm inint wdio .

# Run the testcases

    npm run wdio &

# Run the the particular suite

    npx wdio run ./wdio.conf.js --suite suite_name

# Generate allure repor

    allure generate allure-results --clean -o allure-report
    allure open allure-report
