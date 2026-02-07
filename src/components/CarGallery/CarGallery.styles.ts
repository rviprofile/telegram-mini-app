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

  .selected {
    border: 2px solid white;
  }
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 16px;
  right: 16px;

  background: rgba(31, 38, 61, 0.1);
`;
