import { IncomingWebhook } from '@slack/webhook';
import * as dotenv from 'dotenv';

dotenv.config();
let channelUrl = process.env.SLACK_CHANNEL_WEBHOOK_URL;
let channelId = process.env.SLACK_CHANNEL_ID;

export const sendSpamMessage = (body) => {
    let {Type: messageType, From: sender, Email: receiver, Description: desc, BouncedAt: time} = body;
    try {
        if(messageType === 'SpamNotification') {
            const webhook = new IncomingWebhook(channelUrl);
            webhook.send({
                type: "mrkdwn",
                text: ` :warning: <#${channelId}> The email/message from ${sender} to ${receiver} has been reported as *SPAM* at ${new Date(time).toLocaleString()} with the following description:
                \n> ${desc}`,
            });
    
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log('error in service', err);
        return false;
    }
}