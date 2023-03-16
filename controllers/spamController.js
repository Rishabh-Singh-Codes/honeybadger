import { sendSpamMessage } from '../services/spamService.js';

export const spamMessage = (req, res) => {
  const {body} = req;

  try {
    let result = sendSpamMessage(body);
    if(result) {
        return res.status(200).json({
            status: 200,
            message: `Message sent successfully to Slack Channel: #${process.env.SLACK_CHANNEL_NAME}.`
        });
    } else {
        return res.status(200).json({
            status: 200,
            message: 'Message received was not spam.'
        });
    }
  } catch (err) {
      return res.status(400).json({status: 400, message: err});
  }

};
