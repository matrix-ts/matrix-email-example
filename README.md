# Matrix Requirement Email integration
This is an example of using the Matrix Requirements API to integrate with your own systems. In this case we are using an email service to forward notifications for changes

## Requirements
Since the Matrix system needs a public URL to call with notifications, this example has to run on a publicly available system. To do this we install the service on [Heroku](http://www.heroku.com) which is an easy to use deployment platform for web applications.

## Run it

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Setup: Matrix

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