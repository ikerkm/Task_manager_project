// console.log('hola')

const fetchServer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, {data: [1,2,3,4]})
    })
}

// fetchServer().then(res => {
//     console.log(res);
// })

const datoUnicoPromise = () => {
    const inicio = Date.now();

    fetchServer().then(res => {
        console.log(res);

        console.log('Promesa:', Date.now() - inicio)
    })
}

const datoUnicoAsyncAwait = async () => {
    const inicio = Date.now();

    const res = await fetchServer();
    console.log('Await: ', Date.now() - inicio)
}

// datoUnicoPromise();
// datoUnicoAsyncAwait();

const datosSinRelacionPromise = () => {
    const inicio = Date.now();

    const userPromise = fetchServer()
    const tiempoPromise = fetchServer()

    Promise.all([userPromise, tiempoPromise]).then(res => {
        const [user, tiempo] = res;

        console.log('Promise.all: ', Date.now() - inicio)
    })
}

datosSinRelacionPromise();

const datosSinRelacionAsyncAwait = async () => {
    
    const inicio = Date.now();

    const userPromise = await fetchServer()
    const tiempoPromise = await fetchServer()

    console.log('Await: ', Date.now() - inicio)

    // const inicio = Date.now();

    // fetchServer().then(res => {
    //     return fetchServer().then(res2 => {
    //         console.log(res, res2);
    //         console.log('Await: ', Date.now() - inicio)
    //     }).catch()
    // }).catch()
    // .then()
}

datosSinRelacionAsyncAwait();