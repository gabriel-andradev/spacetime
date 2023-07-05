import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import fastify from 'fastify'
import multipart from '@fastify/multipart'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})
app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)
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
