module.exports = {

    routes:[
        {
            method:'GET',
            path:'/employees/:slug',
            handler:'employee.findOne',
            config:{
                auth:false
            }
        }
    ]
}