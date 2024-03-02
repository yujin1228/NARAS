import styled from "@emotion/styled";

interface ISubLayout{
  children: React.ReactNode;
}
export default function SubLayout({ children }: ISubLayout ) {
  return (
    <>
      {children}
      <SFooter>@ureal</SFooter>
    </>
  );
}

const SFooter = styled.footer`
  border-top: 1px solid rgb(230, 230, 230);
  padding-top: 20px;
  margin-top: 20px;
  text-align: center;
  color: gray;
  font-size: 14px;
`;