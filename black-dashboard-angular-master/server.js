//Install express server

app.use(express.static('./dist'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
