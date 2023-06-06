module.exports = {

    routes:[
        {
            method:'GET',
            path:'/floors/:slug',
            handler:'floor.findOne',
            config:{
                auth:false
            }
        }
    ]
}