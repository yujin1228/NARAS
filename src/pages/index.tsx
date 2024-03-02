import { fetchCountries } from "@/api/api";
import CountryList, { IContries } from "@/componets/CountryList";
import Searchbar from "@/componets/SearchBar";
import Layout from "@/componets/layout/Layout";
import styled from "@emotion/styled";

export default function Home({ countries }: IContries) {
  return (
    <Layout>
      <Searchbar q=""/>
      <CountryList countries={countries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // API 호출 코드가 필요함

  const countries = await fetchCountries();
  console.log("countries 데이터 불러옴");

  return {
    props: {
      countries,
    },
  };
};
