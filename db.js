import moongose from 'mongoose';

const conn = () => {
    moongose.connect(process.env.DB_URL, {
       dbName: 'lenslight_tr',
         useNewUrlParser: true,
            useUnifiedTopology: true,
    }).then(() => console.log('DB connected'
    )).catch(err => console.log(`error: ${err}`));
    };

export default conn;