import { CommonEngine } from '@angular/ssr';
import { Controller, Get, Req, Res } from '@nestjs/common';
import bootstrap from '../../../main.server';
import express, { NextFunction, Request, Response } from 'express';
import { APP_BASE_HREF } from '@angular/common';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

@Controller()
export class SsrController {
    serverDistFolder: string
    browserDistFolder: string
    indexHtml: string

  constructor() {
    this.serverDistFolder = dirname(fileURLToPath(import.meta.url));
    this.browserDistFolder = resolve(this.serverDistFolder, '../browser');
    this.indexHtml = join(this.serverDistFolder, 'index.server.html');
  }

  // All regular routes use the Angular engine
  @Get('*')
  async angularRoutes(@Req() req: Request, @Res() res: Response, next: NextFunction) {

    const { protocol, originalUrl, baseUrl, headers } = req;

    const commonEngine = new CommonEngine()
    
    commonEngine.render({
      bootstrap,
      documentFilePath: this.indexHtml, 
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: this.browserDistFolder, 
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
  }  
}
