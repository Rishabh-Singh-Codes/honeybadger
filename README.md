# Slack App - Spam Notification

A backend service to send notification to a slack channel in case your message is reported as ```Spam```.

### Steps to reproduce

#### 1. Create a Slack app (if you don't have one already) [Link](https://api.slack.com/apps)
This app will post the spam notification as message in the slack channel.

#### 2. Enable Incoming Webhooks
In the settings page of your app, go to 'Incoming Webhooks' section and turn on 'Activate Incoming Webhooks' toggle button.

#### 3. Create an Incoming Webhook
Click on 'Add New Webhook to Workspace' button to create new webhook -> select the channel -> click on 'Authorize' -> store the Webhook URL.

#### 4. Clone this repository 
After cloning, create .env file in the root directory similar to .env.example file and replace the values with your SLACK_CHANNEL_WEBHOOK_URL(Obtained in the previous step), SLACK_CHANNEL_NAME, SLACK_CHANNEL_ID(available in channel settings) and desired PORT.

#### 5. Payload comparison
The differentiator in our example json payload is Type, if it is 'SpamNotification' it will result in spam notification. <br>
The payload which will deliver spam message: 
```json
{
  "RecordType": "Bounce",
  "Type": "SpamNotification",
  "TypeCode": 512,
  "Name": "Spam notification",
  "Tag": "",
  "MessageStream": "outbound",
  "Description": "The message was delivered, but was either blocked by the user, or classified as spam, bulk mail, or had rejected content.",
  "Email": "zaphod@example.com",
  "From": "notifications@honeybadger.io",
  "BouncedAt": "2023-02-27T21:41:30Z",
}
```

The payload which will NOT deliver spam message: 
```json
{
  "RecordType": "Bounce",
  "MessageStream": "outbound",
  "Type": "HardBounce",
  "TypeCode": 1,
  "Name": "Hard bounce",
  "Tag": "Test",
  "Description": "The server was unable to deliver your message (ex: unknown user, mailbox not found).",
  "Email": "arthur@example.com",
  "From": "notifications@honeybadger.io",
  "BouncedAt": "2019-11-05T16:33:54.9070259Z",
}
```

#### 6. Run and test
Install Node.js (if you don't have one already) [Link](https://nodejs.org/) <br>
Intall all dependencies ```npm i``` <br>
Run the application ```node index.js``` <br>
Use [Postman](https://www.postman.com/) or any other platform to test the API: ```http://localhost:{PORT}/spamMessage``` by using either of the above two payloads.


## Developer 	:man_technologist:
If you have any inquiry, please connect with [Rishabh Singh](https://www.linkedin.com/in/rishabh8singh/).
