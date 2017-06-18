/**
 * my-express
 * ----------------------------------------
 *
 * This type definitions is used to extend the express interfaces, so
 * we can add new values and functions to those objects.
 */

declare module 'my-express' {

    import * as expressLib from 'express';
    import * as auth0 from 'auth0';
    import * as dto from 'dto';

    namespace myExpress {

        interface Application extends expressLib.Application {
        }

        interface NextFunction extends expressLib.NextFunction {
        }

        interface Request extends expressLib.Request {
            tokeninfo: auth0.User;
            user: dto.User;
        }

        interface Response extends expressLib.Response {
            ok<T>(data: T, options?: ResponseOptions): void;
            created<T>(data: T, options?: ResponseOptions): void;
            found<T>(data: T, options?: ResponseOptions): void;
            updated<T>(data: T, options?: ResponseOptions): void;
            destroyed<T>(options?: ResponseOptions): void;
            failed<T>(status: number, message: string, error?: any): void;
        }

        interface ResponseOptions {
            message?: string;
            links?: ResponseLinks[];
        }

        interface ResponseLinks {
            name: string;
            url: string;
        }
    }

}
