import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";

export interface ICountryItem {
  code: string;
  commonName: string;
  flagEmoji: string;
  flagImg: string;
  population: number; //인구
  region: string; //지역
  capital: string[]; //수도
}

export default function CountryItem({
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
  capital,
}: ICountryItem) {
  const router = useRouter();

  const onClickItem = () => {
    router.push(`/country/${code}`);
  };

  return (
    <SContainer onClick={onClickItem}>
      <SImgWrapper>
        <Image src={flagImg} alt="국기이미지" fill />
      </SImgWrapper>
      <SContent>
        <SName>{flagEmoji} {commonName}</SName>
        <div>지역 : {region}</div>
        <div>수도 : {capital.join(", ")}</div>
        <div>인구 : {population}</div>
      </SContent>
    </SContainer>
  );
}

const SContainer = styled.article`
  width: 220px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const SImgWrapper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
`;

const SContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0px;
`;