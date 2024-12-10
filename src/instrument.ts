import * as Sentry from "@sentry/node";

// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://b5f29bfe807c4898b0f4a155c797c936@o447951.ingest.us.sentry.io/4505583202074624",

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  debug: true,
});
