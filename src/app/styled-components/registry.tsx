'use client';

import React, { useState } from 'react';
import { StyleSheetManager } from 'styled-components';

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() =>
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    typeof window === 'undefined' ? require('styled-components').ServerStyleSheet : null
  );

  if (typeof window === 'undefined' && styledComponentsStyleSheet) {
    const sheet = styledComponentsStyleSheet;
    const styles = sheet.getStyleElement();
    return (
      <StyleSheetManager sheet={sheet.instance}>
        <>
          {styles}
          {children}
        </>
      </StyleSheetManager>
    );
  }

  return <>{children}</>;
}
