import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createMessage(textMessage: string) {
  const message = await client.messages.create({
    body: textMessage,
    from: "+17432225970",
    to: "+33659949364",
  });

  console.log(message.body);
}

export default createMessage;
