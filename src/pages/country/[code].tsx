import { useRouter } from "next/router";
import SubLayout from "@/componets/layout/SubLayout";
import { fetchCountry } from "@/api/api";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/componets/layout/Layout";
import CountryDetail, { ICountryDetail } from "@/componets/CountryDetail";

interface Props {
  country: ICountryDetail;
}

export default function Country({country}:Props) {
  const router = useRouter();
  const {code} = router.query;

  if (!country) {
    return <div>존재하지 않는 국가입니다</div>;
  }

  return (
    <Layout title="국가상세">
      <SubLayout>
        <CountryDetail {...country}/>
      </SubLayout>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { code: "ABW" } },
      { params: { code: "KOR" } },
    ],
    fallback: true,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { code } = context.params as Params;

  let country = null;
  if (code) {
    country = await fetchCountry(code as string);
  }

  return {
    props: {
      country,
    },
    revalidate: 3,
  };
};