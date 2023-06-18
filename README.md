¡# Notification UI

This template includes samples how to install the UI.


## On Live
URL: https://notification-site-react-app.s3.us-east-1.amazonaws.com/index.html

## Accounts
I created the following accounts to test the application

```bash
{
    "users": [
        {
            "user_id": "U001",
            "name": "one",
            "email": "user_one@test.com",
            "phone_number": "111-11-1111",
            "categories": ["Sports", "Movies"],
            "notification_types": ["SMS", "E-Mail"]
        },
        {
            "user_id": "U002",
            "name": "two",
            "email": "user_two@test.com",
            "phone_number": "222-22-2222",
            "categories": ["Finance"],
            "notification_types": ["Push Notification"]
        }, 
        {
            "user_id": "U003",
            "name": "user_three",
            "email": "user_three@test.com",
            "phone_number": "333-33-3333",
            "categories": ["Finance","Movies"],
            "notification_types": ["SMS", "Push Notification"]
        }
    ]
}
'
```

## Run Locally

```bash
Run the following command in root path
$ yarn install
$ yarn start

```

## Change Environment
If you need to link to other environment.
You need to change the url in the file `src/api/common.ts` `line 4`
```
    baseURL: "https://<URL>",
```

## Unit test
The repository does not have unit test
