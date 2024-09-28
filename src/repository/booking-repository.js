const {StatusCodes}=require('http-status-codes')

const {Booking}=require('../models/index');
const { AppError,ValidationError } = require('../utils/errors');


class BookingRepository{
    async create(data){
        try{

        }catch(error){
            if(error.name==='SequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError();
        }
    }
}