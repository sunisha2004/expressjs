import { Router } from "express";

// import {getData,postData} from "./reqhandler.js";

import * as rh from './reqhandler.js'

const router = Router();

// Apply middleware to the postData route
router.route('/getData').get(rh.getData);
router.route('/postData').post(middle, rh.postData);  // Add 'middle' middleware here

export default router;

function middle(req, res, next) {
    console.log(req.body);

    let body = req.body;
    let pass = body.password;
    let cpass = body.confirmpass;

    console.log(pass);
    console.log(cpass);

    if (pass === cpass) {
        console.log("success");
    } else {
        console.log("failed");
    }

    next();  // Call next() to move to the next middleware or route handler
}
