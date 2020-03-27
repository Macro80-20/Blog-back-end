import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { Request, Response} from 'express';
import * as dotenv from 'dotenv'
dotenv.config()

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    use(req: Request, res:Response, next: Function){
        jwt({
            secret: expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`

            }),
            issuer: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
        })
    }
}