import Express from 'express';
import https from 'https';
import fs from 'fs';


const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    ca: fs.readFileSync('ca.pem')
};



let app: Express.Application | undefined = undefined;
const PORT = 443;








// *************************************************
// Setup Express
// *************************************************

app = Express();
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static('public'));
app.use(Express.json());

  app.get('/love-bomb',async(req,res)=>{ 
    res.send(`<!DOCTYPE html><html><head>
      <title>Thoughts Collections</title>
      <meta property="og:image" content="https://frames.cryptocheckout.co/lovebomb-intro.png" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://frames.cryptocheckout.co/lovebomb-intro.png" />
      <meta property="fc:frame:post_url" content="https://frames.cryptocheckout.co/love-bomb/submit" />
      <meta property="fc:frame:input:text" content="Type text, emoji, image url,...." />
      <meta property="fc:frame:button:1" content="Submit" />
      <meta property="fc:frame:button:1:action" content="post" />
      </head></html>`);
  });  
  app.post('/love-bomb/submit',async(req,res)=>{ 
    console.log(req.body);
    res.send(`<!DOCTYPE html><html><head>
      <title>Glo Dollar Donation Frame</title>
      <meta property="og:image" content="https://frames.cryptocheckout.co/lovebomb-outro.png" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://frames.cryptocheckout.co/lovebomb-outro.png" />
      </head></html>`);
  });





// *************************************************
// Add 404 handler
// *************************************************

app.use(function (_req: Express.Request, res: Express.Response) {
    res.status(404).send("Not found");
});

// *************************************************
// Start server
// *************************************************

https.createServer(options, app).listen(PORT, () => console.log(`Webserver running at http://localhost:${PORT}/`));

