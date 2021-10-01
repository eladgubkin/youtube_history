import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "inner-grid inner-grid inner-grid timeline"
    "inner-grid inner-grid inner-grid timeline"
    "barchart1 barchart1 barchart2 barchart2"
    "table table table table";
`;

export const StyledInnerGrid = styled.section`
  grid-area: inner-grid;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "heatmap heatmap"
    "wordcloud piechart";
`;

export const StyledHeatmap = styled.section`
  grid-area: heatmap;
`;

export const StyledTimeline = styled.section`
  grid-area: timeline;
`;

export const StyledWordcloud = styled.section`
  grid-area: wordcloud;
`;

export const StyledPiephart = styled.section`
  grid-area: piechart;
`;

export const StyledBarchart1 = styled.section`
  grid-area: barchart1;
`;

export const StyledBarchart2 = styled.section`
  grid-area: barchart2;
`;

export const StyledTable = styled.section`
  grid-area: table;
`;
