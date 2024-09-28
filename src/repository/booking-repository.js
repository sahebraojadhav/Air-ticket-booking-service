const {StatusCodes}=require('http-status-codes')

const {Booking}=require('../models/index');
const { AppError,ValidationError } = require('../utils/errors');


class BookingRepository{
    async create(data){
        try{
            const booking=await Booking.create(data);

        }catch(error){
            if(error.name==='SequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError(
                'ReposistoryError',
                'Cannot create Booking',
                'There was some issue creating the booking,please tgyr again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async update(data){
        try{

        }catch(error){
            
        }
    }
}