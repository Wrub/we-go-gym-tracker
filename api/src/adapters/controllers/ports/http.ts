export interface HttpRequest {
  body?: any;
  params?: any;
  headers?: any;
  cookies?: { [key: string]: string };
  userId?: string;
}

export interface HttpResponse {
  statusCode: number;
  body: any;
  cookie?: CookieData;
}

export interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  maxAge?: number;
  sameSite?: "strict" | "lax" | "none";
  path?: string;
}

export interface CookieData {
  name: string;
  value: string;
  options: CookieOptions;
}
