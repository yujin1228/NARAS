import { useEffect, useState } from "react";
import style from "./Searchbar.module.css";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

export interface ISearchWord {
  q: string;
}

export default function Searchbar({ q }:ISearchWord) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (q && typeof q === 'string') {
      setSearch(q);
    }
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (search !== "" && search !== undefined) {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <SContainer>
      <SInput
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요..."
      />
      <SButton onClick={onClickSearch}>검색</SButton>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: rgb(230, 230, 230);
  padding: 15px;
`;

const SButton = styled.button`
  width: 80px;
  border: none;
  border-radius: 10px;
  background-color: white;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
`;