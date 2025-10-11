const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync= require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js"); 
const Listing = require("../models/listing.js");
const {validatereview,isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// reviews
// post route
router.post("/",validatereview, isLoggedIn,wrapAsync(reviewController.createReview));

//delete reviews route
router.delete("/:reviewId",isReviewAuthor,isLoggedIn, wrapAsync(reviewController.destoryReview)
);

module.exports = router; 