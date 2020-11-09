import { join } from 'path';
import mongoose from 'mongoose';
import morgan from 'morgan';
import {userRouter} from "../routes/userRoute.js"
import express from "express";
import { db } from "./config.js";
export function init() {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(express.json());

    // add a router
    app.use('/api/users', userRouter);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

