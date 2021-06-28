const
    request = require('supertest'),
    app = require('../src/index');

/**
 * Testing get todos los usuarios 
 */

describe('Get /',()=>{
    it('Prueba consultar todos los empleados', done =>{
        request(app)
            .get('/')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done)
    })
})

