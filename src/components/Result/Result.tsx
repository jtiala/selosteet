import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useAppState } from "../../state/appState";
import {
  renderPreview,
  renderMarkdown,
  renderHtml,
  renderTxt
} from "./Result.utils";
import useStyles from "./Result.styles";

interface TabPanelProps {
  index: number;
  isActive: boolean;
  children?: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = props => {
  const { index, isActive, children } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={!isActive}
      id={`format-tabpanel-${index}`}
      aria-labelledby={`format-tab-${index}`}
    >
      {children}
    </Box>
  );
};

const tabProps = (index: number) => ({
  id: `format-tab-${index}`,
  "aria-controls": `format-tabpanel-${index}`
});

const tabPanelProps = (index: number, activeTab: number) => ({
  index,
  isActive: activeTab === index
});

const Result: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const state = useAppState();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newTab: number) => {
    setActiveTab(newTab);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label={t("result:tabsLabel")}
        className={classes.tabs}
        indicatorColor="primary"
        variant="standard"
      >
        <Tab label={t("result:preview")} {...tabProps(0)} />
        <Tab label={t("result:markdown")} {...tabProps(1)} />
        <Tab label={t("result:html")} {...tabProps(2)} />
        <Tab label={t("result:txt")} {...tabProps(3)} />
      </Tabs>
      <TabPanel {...tabPanelProps(0, activeTab)}>
        <pre className={classes.pre}>{renderPreview(state, t)}</pre>
      </TabPanel>
      <TabPanel {...tabPanelProps(1, activeTab)}>
        <pre className={classes.pre}>{renderMarkdown(state, t)}</pre>
      </TabPanel>
      <TabPanel {...tabPanelProps(2, activeTab)}>
        <pre className={classes.pre}>{renderHtml(state, t)}</pre>
      </TabPanel>
      <TabPanel {...tabPanelProps(3, activeTab)}>
        <pre className={classes.pre}>{renderTxt(state, t)}</pre>
      </TabPanel>
    </Paper>
  );
};

export default Result;
