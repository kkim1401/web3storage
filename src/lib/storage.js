import { create } from 'ipfs-http-client';
import { Web3Storage } from 'web3.storage';

const client = new Web3Storage({ token: process.env.REACT_APP_TOKEN });

const createFileUrl = (cid, filename = '') =>
  `https://dweb.link/ipfs/${cid}/${filename}`;

const fetchDirectoryContent = async (cid) => {
  const url = 'https://dweb.link/api/v0';
  const ipfs = create({ url });

  const links = [];
  for await (const link of ipfs.ls(cid)) {
    links.push(link);
  }
  return links;
};
fetchDirectoryContent.queryKey = 'fetchDirectoryContent';

const fetchDirectories = (...args) => client.list(...args);
fetchDirectories.queryKey = 'fetchDirectories';

const put = (...args) => client.put(...args);

export { client, fetchDirectories, fetchDirectoryContent, put, createFileUrl };
