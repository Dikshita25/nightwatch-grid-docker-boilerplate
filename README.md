## Goal?

This is a built-in biolerplate project which will help you build a dockerized app for running the nightwatch tests in a parallel dockerized environment, using the concept of Selenium-grid(hub-nodes)
As we know, selenium hub is a central grid for all the nodes, it accepts request and executes the tests on the available nodes.

![docker-nightwatch](/images/docker-nightwatch.png)

### Structure

```
nightwatch-grid-docker-boilerplate

└─── page-objects
│    └─── gitPage.js
│
└─── tests
│     └─── gitLogin.js
│
└─── nightwatch.conf.js
└─── package.json
└─── package-lock.json
└─── Dockerfile
└─── docker-compose.yml
```

- The `page-objects` and `test` folders use the page object concept for executing the simple nightwatch tests.
- The commands to execute the tests are defined within the `package.json` refering to execute the tests in both environments i.e 'Chrome' and 'Firefox'

- `nightwatch.conf.js` which is the default file for the runner to execute the tests, containing the necessary configurations mentioning the browser capabilities, along with details for **`selenium`** server to act as a host

- `docker-compose.yml` contains commands to configure Selenium grid as a hub and connect to Firefox, Chrome browser to run the tests. We have used links to link the containers with the hub container and built an image for our nightwatch project within the root of the application. You can refer to this [link](https://docs.docker.com/compose/) for configuring your `docker-compose.yml` file

- Lastly, the `Dockerfile`, which is a simple text document containing all the commands to automate building the images. This file basically contains commands for pulling the alpine image (light weight image), and install all the necessary packages to setup our nightwatchJS project.

### Setup

1. Clone the repo, using command:

```
$ git clone https://github.com/Dikshita25/nightwatch-grid-docker-boilerplate.git
```

2. Navigate to the directory:

```
$ cd nightwatch-grid-docker-boilerplate
```

3. Run the docker-compose.yml file using command:

```
docker-compose up
```

### Output

```
nightwatch_1    |  chrome  [Git Login] Test Suite
nightwatch_1    |  chrome  ======================
nightwatch_1    |  chrome  - Connecting to hub on port 4444...
nightwatch_1    |  chrome
nightwatch_1    |  chrome  ℹ Connected to hub on port 4444 (3613ms).
nightwatch_1    |  chrome  Using: chrome (56.0.2924.87) on LINUX platform.
nightwatch_1    |  chrome  Results for:  First test execution
nightwatch_1    |  chrome  ✔ Email field is displayed (825ms)
nightwatch_1    |  chrome  ✔ chrome [Git Login] First test execution (6.439s)
nightwatch_1    |  chrome  Results for:  Second test execution
nightwatch_1    |  chrome  ✔ heading is displayed (371ms)
nightwatch_1    |  chrome  ✔ Passed [equal]: Where the world builds software == Where the world builds software
nightwatch_1    |  chrome  ✔ chrome [Git Login] Second test execution (592ms)
nightwatch_1    |  firefox  [Git Login] Test Suite
nightwatch_1    |  firefox  ======================
nightwatch_1    |  firefox  - Connecting to hub on port 4444...
nightwatch_1    |  firefox
nightwatch_1    |  firefox  ℹ Connected to hub on port 4444 (8941ms).
nightwatch_1    |  firefox  Using: firefox (51.0.1) on LINUX 5.4.0-72-generic platform.
nightwatch_1    |  firefox  Results for:  First test execution
nightwatch_1    |  firefox  ✔ Email field is displayed (365ms)
nightwatch_1    |  firefox  ✔ firefox [Git Login] First test execution (4.212s)
nightwatch_1    |  firefox  Results for:  Second test execution
nightwatch_1    |  firefox  ✔ heading is displayed (405ms)
nightwatch_1    |  firefox  ✔ Passed [equal]: Where the world builds software == Where the world builds software
nightwatch_1    |  firefox  ✔ firefox [Git Login] Second test execution (517ms)
nightwatch_1    |
nightwatch_1    | OK. 6  total assertions passed (17.353s)
```

That's it...
