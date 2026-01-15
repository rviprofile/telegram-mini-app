import styled from "@emotion/styled";

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;

  .images_row {
    .hide-scrollbar {
      overflow: auto; /* скролл остаётся */
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE / Edge legacy */
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none; /* Chrome / Safari */
    }
  }
`;
