import { useState } from 'react';
import { useMutation } from 'react-query';
import { createFileUrl, put } from '../../lib/storage';
import {
  Root,
  Form,
  HiddenLabel,
  CenteredFileLabel,
  SubmitButton,
  Link,
} from './styles';

function Uploader() {
  const [files, setFiles] = useState([]);
  const { data: cid, mutate, isLoading, isSuccess } = useMutation(put);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(files, {
      name: 'ffo',
    });
  };

  return (
    <Root>
      <header>
        <h1>Web3 Storage</h1>
      </header>
      <Form onSubmit={handleSubmit}>
        <HiddenLabel htmlFor='files'>Files</HiddenLabel>
        <CenteredFileLabel
          type='file'
          id='files'
          onChange={(e) => setFiles(e.target.files)}
          required
          multiple
        />
        <SubmitButton type='submit' value='Submit' />
      </Form>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {isSuccess && (
        <div>
          <p>Success! Here are the links to your files:</p>
          {Array.from(files).map((file) => {
            const url = createFileUrl(cid, file.name);
            return (
              <Link key={file.name} href={url}>
                {url}
              </Link>
            );
          })}
        </div>
      )}
    </Root>
  );
}

export default Uploader;
