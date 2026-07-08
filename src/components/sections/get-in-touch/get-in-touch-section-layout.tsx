import type { ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";

type GetInTouchSectionLayoutProps = {
  info: ReactNode;
  form: ReactNode;
};

export function GetInTouchSectionLayout({ info, form }: GetInTouchSectionLayoutProps) {
  return (
    <PageContainer className="vbs-get-in-touch__layout">
      <div className="vbs-get-in-touch__info-col">{info}</div>
      <div className="vbs-get-in-touch__form-col">{form}</div>
    </PageContainer>
  );
}
