import CountryItem from "./CountryItem";
import styled from "@emotion/styled";

export interface IContries {
  countries: {
    code: string;
    commonName: string;
    flagEmoji: string;
    flagImg: string;
    capital: string[];
    region: string;
    population: number;
  }[]
}

export default function CountryList({ countries }: IContries) {
  return (
    <SContainer>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </SContainer>
  );
}

CountryList.defaultProps = {
  countries: [],
};

const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`