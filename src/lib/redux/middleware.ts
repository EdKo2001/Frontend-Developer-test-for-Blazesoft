import { Middleware } from "redux";
import { createLogger } from "redux-logger";

let middleware: Middleware[] = [];

if (process.env.NODE_ENV === "development") {
  const loggerOptions = {
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => "#139BFE",
      prevState: () => "#1C5FAF",
      action: () => "#149945",
      nextState: () => "#A47104",
      error: () => "#ff0005",
    },
    predicate: () => typeof window !== "undefined",
  };

  const loggerMiddleware: Middleware = createLogger(loggerOptions);
  middleware = [...middleware, loggerMiddleware];
}

export { middleware };
