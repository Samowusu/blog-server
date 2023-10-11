// custom.d.ts
declare global {
  namespace Express {
    interface Request {
      user: {
        userId: string;
        name: string;
        // Add other properties if needed
      };
    }
  }
}
