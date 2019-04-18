const enviroments = {

    production: "production",
    development: "development",
    test: "test"
}

const ENV = enviroments.development;
//comprueba lo que recibimos en ENV
//console.log(ENV);



const config = {
    [enviroments.production]: {
        port: 80,
        MongoDB: {
            port: 27017,
            host: 'localhost',
            DB: 'DB_tasks_react'
        }

    },
    [enviroments.development]: {
        port: 3003,
        MongoDB: {

            port: 27017,
            host: 'localhost',
            DB: 'DB_tasks_dev_react'

        }
    },

    [enviroments.test]: {

        port: 3004,
        MongoDB: {


            port: 27017,
            host: 'localhost',
            DB: 'DB_tasks_test_react'

        }
    }
}


//comprueba el entorno
//console.log(config[ENV]);  


const CONFIG = config[ENV];

//comprobamos que existe confid de ENV y si no existe nos de un error
if (!CONFIG) {
    throw new Error(`NODE_ENV =${ENV} is not a valid enviroment.`)
}

//console.log(config[ENV]);  


//console.log(process.env);
/*
process.env = {
    ...process.env,
    ...CONFIG
};*/