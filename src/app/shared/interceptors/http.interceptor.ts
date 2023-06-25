import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith('http://')) {
    return next(req.clone({ url: `/api/v1${req.url}` }));
  }
  return next(req);
};
