import dotenv from 'dotenv';
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

dotenv.config()

const PROTO_PATH = process.env.PROTO_PATH;
const REMOTE_HOST = process.env.REMOTE_HOST;

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

const client = new productService(REMOTE_HOST,grpc.credentials.createInsecure());

client.AddProduct({id_product: idProduct}, (err, data) => {
    if(err){
      console.log(err);   // Se procesa y visualiza por consola el error.
    } else {
      console.log('Response received from remote service:', data); // Se procesa y visualiza el mensaje de respuesta recibido.
    }
   });