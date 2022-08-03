import React from "react";
import { PageLayout } from "./components/PageLayout";

function App() {
  return (
      <PageLayout>
        <div className="container text-center">
          <p className="h3">List of timesheets awaiting approval will show here when employee signs in.</p>
        </div>
      </PageLayout>
  );
}

export default App;
