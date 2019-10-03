import React, { Fragment, ReactNode } from "react";

import { TFunction } from "i18next";
import Typography from "@material-ui/core/Typography";

import { AppState, Sections } from "../../state/appState";

interface RenderFunctions {
  h1: (s: string) => string | ReactNode;
  h2: (s: string, n: number) => string | ReactNode;
  text: (s: string) => string | ReactNode;
}

export const renderPreview = (state: AppState, t: TFunction): ReactNode => {
  const renderFunctions: RenderFunctions = {
    h1: s => (
      <Typography variant="h1" gutterBottom>
        {s}
      </Typography>
    ),
    h2: (s, n) => (
      <Typography variant="h2" gutterBottom>
        {n}. {s}
      </Typography>
    ),
    text: s => <Typography paragraph>{s}</Typography>
  };

  return getResult(state, t, renderFunctions).map((v, i) => (
    <Fragment key={`preview-node-${i}`}>{v}</Fragment>
  ));
};

export const renderMarkdown = (state: AppState, t: TFunction): string => {
  const renderFunctions: RenderFunctions = {
    h1: s => `# ${s}\n\n`,
    h2: (s, n) => `## ${n}. ${s}\n\n`,
    text: s => `${s}\n\n`
  };

  return getResult(state, t, renderFunctions).join("");
};

export const renderHtml = (state: AppState, t: TFunction): string => {
  const renderFunctions: RenderFunctions = {
    h1: s => `<h1>${s}</h1>\n\n`,
    h2: (s, n) => `<h2>${n}. ${s}</h2>\n\n`,
    text: s => `<p>${s}</p>\n\n`
  };

  return getResult(state, t, renderFunctions).join("");
};

export const renderTxt = (state: AppState, t: TFunction): string => {
  const renderFunctions: RenderFunctions = {
    h1: s => `${s}\n\n`,
    h2: (s, n) => `${n}. ${s}\n\n`,
    text: s => `${s}\n\n`
  };

  return getResult(state, t, renderFunctions).join("");
};

const getResult = (
  state: AppState,
  t: TFunction,
  renderFunctions: RenderFunctions
): (string | ReactNode)[] => {
  const { sections } = state;
  const { h1, h2, text } = renderFunctions;
  const result: (string | ReactNode)[] = [];
  let h2Count = 1;

  // General
  result.push(h1(t("result:title")));

  result.push(
    text(
      t("result:subtitle", {
        siteName: sections[Sections.GENERAL].siteName,
        siteUrl: sections[Sections.GENERAL].siteUrl,
        created: new Date().toLocaleDateString("fi-FI"),
        modified: new Date().toLocaleDateString("fi-FI")
      })
    )
  );

  // Register
  if (sections[Sections.REGISTER].controller) {
    result.push(
      h2(t(`${Sections.REGISTER}:fields:controller:label`), h2Count++),
      text(sections[Sections.REGISTER].controller)
    );
  }

  if (sections[Sections.REGISTER].contactPerson) {
    result.push(
      h2(t(`${Sections.REGISTER}:fields:contactPerson:label`), h2Count++),
      text(sections[Sections.REGISTER].contactPerson)
    );
  }

  if (sections[Sections.REGISTER].name) {
    result.push(
      h2(t(`${Sections.REGISTER}:fields:name:label`), h2Count++),
      text(sections[Sections.REGISTER].name)
    );
  }

  if (sections[Sections.REGISTER].legalBasisAndPurpose) {
    result.push(
      h2(
        t(`${Sections.REGISTER}:fields:legalBasisAndPurpose:label`),
        h2Count++
      ),
      text(sections[Sections.REGISTER].legalBasisAndPurpose)
    );
  }

  if (sections[Sections.REGISTER].legalBasis) {
    result.push(
      h2(t(`${Sections.REGISTER}:fields:legalBasis:label`), h2Count++),
      text(sections[Sections.REGISTER].legalBasis)
    );
  }

  if (sections[Sections.REGISTER].purpose) {
    result.push(
      h2(t(`${Sections.REGISTER}:fields:purpose:label`), h2Count++),
      text(sections[Sections.REGISTER].purpose)
    );
  }

  if (sections[Sections.REGISTER].dataContent) {
    result.push(
      h2(t(`${Sections.REGISTER}:fields:dataContent:label`), h2Count++),
      text(sections[Sections.REGISTER].dataContent)
    );
  }

  if (sections[Sections.REGISTER].dataSources) {
    result.push(
      h2(t(`${Sections.REGISTER}:fields:dataSources:label`), h2Count++),
      text(sections[Sections.REGISTER].dataSources)
    );
  }

  if (sections[Sections.REGISTER].dataDisclosureTransferAndStorage) {
    result.push(
      h2(
        t(`${Sections.REGISTER}:fields:dataDisclosureTransferAndStorage:label`),
        h2Count++
      ),
      text(sections[Sections.REGISTER].dataDisclosureTransferAndStorage)
    );
  }

  if (sections[Sections.REGISTER].securityPrinciples) {
    result.push(
      h2(t(`${Sections.REGISTER}:fields:securityPrinciples:label`), h2Count++),
      text(sections[Sections.REGISTER].securityPrinciples)
    );
  }

  if (sections[Sections.REGISTER].dataSubjectsRights) {
    result.push(
      h2(t(`${Sections.REGISTER}:fields:dataSubjectsRights:label`), h2Count++),
      text(sections[Sections.REGISTER].dataSubjectsRights)
    );
  }

  return result;
};
