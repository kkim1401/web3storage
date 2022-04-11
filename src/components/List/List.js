import { useState } from 'react';
import { useQuery } from 'react-query';
import { Root, DirectoriesList } from './styles';
import { fetchDirectories, fetchDirectoryContent } from '../../lib/storage';

function List() {
  const [page, setPage] = useState(1);
  const resultsPerPage = 10;

  const directoriesRequest = useQuery(fetchDirectories.queryKey, async () => {
    const results = [];
    for await (const item of fetchDirectories()) {
      results.push(item);
    }
    return results;
  });
  const directories = directoriesRequest.data;
  const paginatedDirectories = directories?.slice(
    resultsPerPage * (page - 1),
    resultsPerPage * page
  );

  const linksRequest = useQuery(
    [fetchDirectoryContent.queryKey, page],
    () => {
      const requests = paginatedDirectories.map((directory) =>
        fetchDirectoryContent(directory.cid)
      );
      return Promise.allSettled(requests);
    },
    {
      enabled: directoriesRequest.isSuccess,
    }
  );

  console.log({ linksRequest });

  const handleNext = () => setPage((prev) => prev + 1);

  return (
    <Root>
      <header>
        <h1>Web3 Storage</h1>
      </header>
      <DirectoriesList>
        {linksRequest.isSuccess
          ? linksRequest.data.flatMap((link) =>
              link.status === 'fulfilled'
                ? link.value.map((file) => (
                    <div style={{ display: 'flex' }}>{file.name}</div>
                  ))
                : ['small whops']
            )
          : linksRequest.isLoading
          ? 'loading...'
          : linksRequest.isError
          ? 'Giant whops'
          : null}
      </DirectoriesList>
      <button onClick={handleNext}>Next</button>
    </Root>
  );
}

export default List;
