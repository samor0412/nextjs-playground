---
to: "<%= need_style_file ? `${absPath}/styles.tsx` : null %>"
---

import styled from "styled-components";

export const StyledCode = styled.code`
  padding: 40px;
  display: block;
  background-color: #efefef;
  white-space: pre-wrap;
`;