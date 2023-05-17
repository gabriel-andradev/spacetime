import fastify from 'fastify'

const app = fastify()

app.post('/hello', () => {
  return 'Hello World!'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server is running on http://localhost:3333')
  })
