import styled from "@emotion/styled";
import { ICountryItem } from "./CountryItem";
import Image from "next/image";

export interface ICountryDetail extends ICountryItem {
  officialName: string;
  googleMapURL: string;
}

export default function CountryDetail({  
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
  capital,
  officialName,
  googleMapURL
}:ICountryDetail) {

  return (
    <Container>
      <NameSection>
        <CommonName>{flagEmoji}&nbsp;{commonName}</CommonName>
        <OffcialName>{officialName}</OffcialName>
      </NameSection>
      <ImgWrapper>
        <Image src={flagImg} alt="국기이미지" fill />
      </ImgWrapper>
      <InfoSection>
          <div>
            <b>코드 :</b>&nbsp;{code}
          </div>
          <div>
            <b>수도 :</b>&nbsp;{capital.join(", ")}
          </div>
          <div>
            <b>지역 :</b>&nbsp;{region}
          </div>
          <div>
            <b>지도 :</b>&nbsp;
            <a target="_blank" href={googleMapURL}>
              {googleMapURL}
            </a>
          </div>
      </InfoSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const NameSection = styled.h2`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const CommonName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const OffcialName = styled.div`
  text-align: center;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 213px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
