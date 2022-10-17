import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./layout";
import Routes from "./routes";

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
