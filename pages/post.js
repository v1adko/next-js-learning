import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import Layout from "../components/Layout";

const H1 = styled.h1`
  text-decoration: underline;
`;

const P = styled.p`
  color: grey;
`;

const Post = ({ show }) => (
  <Layout>
    <H1>{show.name}</H1>
    <P>{show.summary.replace(/<[/]?p>/g, "")}</P>
    <img src={show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
