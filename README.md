# Matrix Requirement Email integration
This is an example of using the Matrix Requirements API to integrate with your own systems. This basic example simply receives events and displays them on a web page.

## Requirements
Since the Matrix system needs a public URL to call with notifications, this example has to run on a publicly available system. To do this we install the service on [Heroku](http://www.heroku.com) which is an easy to use deployment platform for web applications.

Instead of running it on Heroku you can also run this example on any server that is accessible and can run node.js code. Simply clone this repository and run:
    
    npm install
    npm start

## Run it
The deployment is automated but before you need a (free) account at [Heroku](https://www.heroku.com). Before you press the button below make sure you create an account and login. Once the deployment has run through you can press the "View" link at the end of the deployment process.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Setup: Matrix
... more details on setting up the notifications ...


    {
        "connections":[
            {
                "project":"SIMPLEST",
                "command":"item_created"
            },
            {
                "project":"SIMPLEST",
                "command":"item_edited"
            },
            {
                "project":"SIMPLEST",
                "command":"item_deleted"
            },
            {
                "project":"SIMPLEST",
                "command":"sign_created"
            },
            {
                "project":"SIMPLEST",
                "command":"sign_signed_partial"
            },
            {
                "project":"SIMPLEST",
                "command":"sign_signed_full"
            }
        ]
    }