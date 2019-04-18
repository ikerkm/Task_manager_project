const environments = {
    production: "production",
    development: "development",
    test: "test"
}

const ENV = process.env.NODE_ENV || environments.development;
const JWT_SECRET = `kY$h!Z+#d-iw@LrsFP#tU@CY?T*UQJc5_tO^CDO%FpzenU1RdUTpiXAxCEcc0xmixRO=CwHRJDI_U=4&+8qybu*+@bWAue@#n0lReMqH^JzUj97_xDvFCT=2*mjN3lZv3sr|wy+cgceT&cbWJ?nsw4I$VT-W5ALHcuiaes5Q%=Akzg2lYgg6MM8gc|Uekr+|2Iy3+Ny8S9goz&PgbslK0SL?CV@_&Y_a1M3ZVAqEXU1OyspBi?JVYiYbOq3QP^Ia%5tNrJr@d-=Xl&zenU1RdUTpiXAxCEcc0xmixRO=CwHRJDI_U=4&+8qycSbpO=CwHRJDI_U=4&+8qybu*+@bWAue@#n0lRe31QjHmt4yt70CE8dZFrra8c0%5*qREn9@a-s#v40sEig?R_&oS5br!0gkTwoh*9wQsvYdFVePpFKdDP&0%=ezqSNeTL-0Az-7*ZbSnDa=&LALF?ZON1bteeZ$@Y@uxOpn1f1EO-9On|mWtC+vDLV1e$@U&AuS!%VJF3Oj_9v55Oc@&E9_LD4XKd_VSP$O+-+4TWXDX_Vd#mnzkAaajaA^t6sb+aHEm#3-9NybEXwZREj?H`
const config = {
    [environments.production]: {
        PORT: 80,
        MongoDB: {
            PORT: 27017,
            HOST: 'localhost',
            DB: 'clase_valencia'
        },
        JWT_SECRET
    },
    [environments.development]: {
        PORT: 3000,
        MongoDB: {
            PORT: 27017,
            HOST: 'localhost',
            DB: 'clase_valencia_dev'
        },
        JWT_SECRET
    },
    [environments.test]: {
        PORT: 3000,
        MongoDB: {
            PORT: 27017,
            HOST: 'localhost',
            DB: 'clase_valencia_test'
        },
        JWT_SECRET
    }
}

const CONFIG = config[ENV];

if (!CONFIG) {
    throw new Error(`NODE_ENV=${ENV} is not a valid environment.`);
}

process.env = {
    ...process.env,
    ...CONFIG
};