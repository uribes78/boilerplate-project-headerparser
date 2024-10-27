const { Router } = require('express');

const parseHeader = (req) => {
};

const api = () => {
    let routes = new Router();

    // your first API endpoint...
    routes.get('/hello', function (req, res) {
      res.json({ greeting: 'hello API' });
    });

    routes.get('/whoami', (req, res) => {
        let data = {
            ipaddress: req.ip,
            language: req.get('Accept-Language'),
            software: req.get('User-Agent')
        };

        return res.status(200).json(data).end();
    });

    return routes;
};

module.exports = api;
