declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_USER: string;
    EMAIL_PASS: string;
    NEXT_PUBLIC_SITE_TITLE?: string; // Opcional se for público
  }
}
