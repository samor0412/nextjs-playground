import { grey, paleBlue } from "constants/colors";
import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 20px 80px;
`;

export const YellowNote = styled.div`
  max-width: 800px;
  margin: 10px 0;
  padding: 16px;
  line-height: 1.4;
  background-color: #ffffc3;
`;

export const Tag1 = styled.b`
  color: ${paleBlue};
  background-color: ${grey};
  padding: 4px 8px;
  border-radius: 8px;
`;
