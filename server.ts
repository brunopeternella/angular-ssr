import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { NestFactory } from '@nestjs/core';
import { ApiModule } from './src/api/api.module';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import express from 'express';

export async function app() {
    const serverDistFolder = dirname(fileURLToPath(import.meta.url));
    const browserDistFolder = resolve(serverDistFolder, '../browser');

    const expressServer = express()
    expressServer.use(express.static(browserDistFolder, {maxAge: '1y'}))
  
    const nestServer = await NestFactory.create<NestExpressApplication>(
      ApiModule, 
      new ExpressAdapter(expressServer))

    nestServer.setViewEngine('html')
    nestServer.setBaseViewsDir(browserDistFolder)

    const port = process.env['PORT'] || 4000;
    await nestServer.listen(port, () => {
      console.log(`Node NestJS server listening on http://localhost:${port}`);
    })
}

app();
