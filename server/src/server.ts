import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import fastify from 'fastify'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)
app.register(authRoutes)
app.register(jwt, {
  secret: 'spacetimeDEV',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server is running on http://localhost:3333')
  })
