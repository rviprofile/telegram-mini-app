import * as S from "./CarDescription.styles";

const CarDescription = ({ description }: { description: string }) => {
  return (
    <S.Container>
      <h2>О призе</h2>
      <p>{description}</p>
    </S.Container>
  );
};

export default CarDescription;
