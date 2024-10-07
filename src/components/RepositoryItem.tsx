import React from "react";
import { Repository } from "../types/github";

interface RepositoryItemProps {
  repository: Repository;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repository }) => {
  return (
    <div>
      <h3>
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          {repository.full_name}
        </a>
      </h3>
      <p>{repository.description}</p>
      <p>Linguagem: {repository.language}</p>
      <p>Stars: {repository.stargazers_count}</p>
    </div>
  )
}

export default RepositoryItem;