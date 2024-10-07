import React from "react";
import { Repository } from "../types/github";
import RepositoryItem from "./RepositoryItem";

interface RepositoryListItem {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListItem> = ({ repositories }) => {
  return (
    <ul>
      {repositories.map((repo) => (
        <RepositoryItem key={repo.id} repository={repo} />
      ))}
    </ul>
  );
};

export default RepositoryList;