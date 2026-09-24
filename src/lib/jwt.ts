import * as jose from "jose";

const JWT_SECRET = process.env.SUPABASE_JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("Missing SUPABASE_JWT_SECRET environment variable");
}

const secretKey = new TextEncoder().encode(JWT_SECRET);

export interface TokenPayload extends jose.JWTPayload {
  sub: string;
  email: string;
  role: string;
}

export async function signToken(payload: Omit<TokenPayload, "exp" | "iat">) {
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  const { payload } = await jose.jwtVerify(token, secretKey);
  return payload as TokenPayload;
}
