const server = require('../src/app')
const session = require('supertest')
const agent = session(server)

describe ('T E S T  D E  R U T A S', ()=>{
    describe('GET /videogames/:id',()=>{
        it("Responde con un status 200", async()=>{
            await agent.get("/videogames/1").expect(200)
        })
        it('Responde un objeto con las propiedades: "name", "description", "platforms", "background_image", "released" , "rating" y "genres"', async () => {
            const data = await agent.get("/videogames/1");
            expect(data.body).toHaveProperty("name");
            expect(data.body).toHaveProperty("description");
            expect(data.body).toHaveProperty("platforms");
            expect(data.body).toHaveProperty("background_image");
            expect(data.body).toHaveProperty("released");
            expect(data.body).toHaveProperty("rating");
            expect(data.body).toHaveProperty("genres");
          });
    });
    describe('GET /videogames/genres',()=>{
        it("Responde con status 200", async()=>{
            await agent.get("/videogames/genres").expect(200)
        })
        it('Responde un array con los generos', async()=>{
            const data = await agent.get("/videogames/genres");
            expect(typeof data.body).toBe('object')
            expect(typeof data.body[0].id).toBe('number')
            expect(typeof data.body[0].name).toBe('string')
        })
    })
})