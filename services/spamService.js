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
                // "text": "Danny Torrence left a 1 star review for your property.",
    // "blocks": [
    // 	{
    // 		"type": "section",
    // 		"text": {
    // 			"type": "mrkdwn",
    // 			"text": "Danny Torrence left the following review for your property:"
    // 		}
    // 	},
    // 	{
    // 		"type": "section",
    // 		"block_id": "section567",
    // 		"text": {
    // 			"type": "mrkdwn",
    // 			"text": "<https://example.com|Overlook Hotel> \n :star: \n Doors had too many axe holes, guest in room 237 was far too rowdy, whole place felt stuck in the 1920s."
    // 		},
    // 		"accessory": {
    // 			"type": "image",
    // 			"image_url": "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg",
    // 			"alt_text": "Haunted hotel image"
    // 		}
    // 	},
    // 	{
    // 		"type": "section",
    // 		"block_id": "section789",
    // 		"fields": [
    // 			{
    // 				"type": "mrkdwn",
    // 				"text": "*Average Rating*\n1.0"
    // 			}
    // 		]
    // 	}
    // ]
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