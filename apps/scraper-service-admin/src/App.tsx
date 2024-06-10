import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PageList } from "./page/PageList";
import { PageCreate } from "./page/PageCreate";
import { PageEdit } from "./page/PageEdit";
import { PageShow } from "./page/PageShow";
import { WebsiteList } from "./website/WebsiteList";
import { WebsiteCreate } from "./website/WebsiteCreate";
import { WebsiteEdit } from "./website/WebsiteEdit";
import { WebsiteShow } from "./website/WebsiteShow";
import { ScrapedDataList } from "./scrapedData/ScrapedDataList";
import { ScrapedDataCreate } from "./scrapedData/ScrapedDataCreate";
import { ScrapedDataEdit } from "./scrapedData/ScrapedDataEdit";
import { ScrapedDataShow } from "./scrapedData/ScrapedDataShow";
import { ScrapingJobList } from "./scrapingJob/ScrapingJobList";
import { ScrapingJobCreate } from "./scrapingJob/ScrapingJobCreate";
import { ScrapingJobEdit } from "./scrapingJob/ScrapingJobEdit";
import { ScrapingJobShow } from "./scrapingJob/ScrapingJobShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ScraperService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Page"
          list={PageList}
          edit={PageEdit}
          create={PageCreate}
          show={PageShow}
        />
        <Resource
          name="Website"
          list={WebsiteList}
          edit={WebsiteEdit}
          create={WebsiteCreate}
          show={WebsiteShow}
        />
        <Resource
          name="ScrapedData"
          list={ScrapedDataList}
          edit={ScrapedDataEdit}
          create={ScrapedDataCreate}
          show={ScrapedDataShow}
        />
        <Resource
          name="ScrapingJob"
          list={ScrapingJobList}
          edit={ScrapingJobEdit}
          create={ScrapingJobCreate}
          show={ScrapingJobShow}
        />
      </Admin>
    </div>
  );
};

export default App;
