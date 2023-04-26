/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_BASE_URL: string;
  readonly VITE_REACT_APP_UNICO_BASE_URL: string;
  readonly VITE_REACT_APP_UNICO_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
