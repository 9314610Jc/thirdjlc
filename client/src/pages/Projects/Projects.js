import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API/API";
import {  CardGroup, Container } from "react-bootstrap";


import { useState, useEffect } from "react";

import RepoCard from "../../components/Card/RepoCard";
import TopCard from "../../components/Card/TopCard";

function Projects() {
  const [state, setState] = useState({ repos: [] });
  useEffect(() => {
    const remoteApiPromise = API.getRepos();
    remoteApiPromise.then((items) => {
      const transfromedData = items.data;

      setState((prevState) => ({
        ...prevState,
        repos: transfromedData,
      }));
    });
  }, []);

  return (
    <Container fluid>
      <TopCard />
   <CardGroup>


    

      
      {state.repos.map((item) => (
        <RepoCard
          key={item.id}
          Name={item.name}
          Description={item.description}
          url={item.html_url}
        ></RepoCard>
      ))}
           </CardGroup>
    </Container>
  );
}
export default Projects;
