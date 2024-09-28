class AppError extends Error{
    constructor(
        name,
        messagae,
        explanation,
        statusCode
    ){
        super();
        this.name=name;
        this.message=messagae,
        this.statusCode=statusCode;
        this.explanation=explanation
    }
}

module.exports=AppError;