import { fetchSearchResults } from "@/api/api";
import CountryList from "@/componets/CountryList";
import Searchbar from "@/componets/SearchBar";
import Layout from "@/componets/layout/Layout";
import SubLayout from "@/componets/layout/SubLayout";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const {q} = router.query;

  const [countries, setCountries] = useState([]);

  const setData = async () => {
      const data = await fetchSearchResults(q as string);
      setCountries(data);
  };

  useEffect(() => {
      setData();
  }, [q]);

  return (
    <Layout title={q as string +" 검색결과"}>
      <SubLayout>
        <Searchbar q={q as string}/>
        <CountryList countries={countries}/>
      </SubLayout>
    </Layout>
  )
}
