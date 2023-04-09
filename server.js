const express = require('express');
const bodyParser = require('body-parser');
const { WebhookClient } = require('discord.js');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

const webhookId = process.env.WEBHOOK_ID;
const webhookToken = process.env.WEBHOOK_TOKEN;

const webhookClient = new WebhookClient(webhookId, webhookToken);

app.post('/send', async (req, res) => {
    try {
        const message = req.body.message;
        await webhookClient.send(message);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
