import type { ConfigurationParameters } from "@rhoas/kafka-management-sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { isReactQueryDevToolsEanbled } from "local-storage-helpers";
import type { FunctionComponent } from "react";
import { createContext, lazy, Suspense, useContext } from "react";

const ReactQueryDevtoolsProduction = lazy(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

type ApiContextProps = Pick<
  ConfigurationParameters,
  "accessToken" | "basePath"
> & {
  refetchInterval: number;
};

const ApiContext = createContext<ApiContextProps>(null!);

const queryClient = new QueryClient();

export const ApiProvider: FunctionComponent<ApiContextProps> = ({
  children,
  ...context
}) => {
  const showDevTools = isReactQueryDevToolsEanbled();
  return (
    <QueryClientProvider client={queryClient}>
      <ApiContext.Provider value={context}>
        {children}
        <ReactQueryDevtools initialIsOpen />
        {showDevTools && (
          <Suspense fallback={null}>
            <ReactQueryDevtoolsProduction />
          </Suspense>
        )}
      </ApiContext.Provider>
    </QueryClientProvider>
  );
};

export function useApi() {
  return useContext(ApiContext);
}
