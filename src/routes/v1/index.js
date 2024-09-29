const express=require('express');

const { BookingController }=require('../../controllers/index');

const router=express.Router();

router.post('/bookings',BookingController.create);

//router.use('/v1',v1ApiRoutes);

module.exports=router
