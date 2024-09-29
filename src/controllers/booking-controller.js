const {StatusCodes}=require('http-status-codes');

const {BookingService}=require('../services/index');
const { response } = require('express');

const bookingService=new BookingService();

const create=async(req,res)=>{
    try{
        const response=await bookingService.createBooking(req.body);
        
        console.log("from FlIGHT controller",response);

        return res.status(StatusCodes.OK).json({
            message:'successfull completed booking',
            success:true,
            err:{},
            data:response
        })
    }catch(error){ 
        console.log("FROM BOOKING CONTROLLER",error);
        return res.status(error.StatusCodes || 500).json({
            message:error.message,
            success:false,
            err:error.explanation,
            data:{}
        })
    }
}

module.exports={
    create
}