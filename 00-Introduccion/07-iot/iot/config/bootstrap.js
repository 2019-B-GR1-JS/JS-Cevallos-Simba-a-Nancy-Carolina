/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const moduloRaspberry = {

  calcularProximidad:function () {

    return Math.random() * ( 10 - 0) +0;

  }

}


  module.exports.bootstrap = async function() {

    setInterval(

      async ()=>{

        const valor = moduloRaspberry.calcularProximidad();

        Console.log('Valor proximidad:', valor);
        //1337 -> IOT
        //1338 -> Backend
        //POST http://localhost:1338/MonitoreoMovimiento {'valor':valor}
        const respuesaServidor = await  axios.post('/user',{
          firstName: 'Fred',
          lastName: 'Flintstone'
        })

      },2000)

  };
