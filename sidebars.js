module.exports = {
  "docs": {
    "Getting Started": [
      'welcome',
      'doc2',
      'doc3',
    ],
    "Features": [
      'mdx',
    ],
  },
  "api-ref": {
    "Index": [
      'api-ref/index',
    ],
    "Manager API": [
      'api-ref/manager/overview',
      'api-ref/manager/auth',
      'api-ref/manager/cloud',
      {
        type: 'category',
        label: 'Subsets',
        items: [
          'api-ref/manager/rest/overview',
          'api-ref/manager/gql/overview',
        ],
      }
    ],
    "Storage Proxy API": [
      'api-ref/storage-proxy/manager-facing',
      'api-ref/storage-proxy/client-facing',
    ],
    "WebSocket Proxy API": [
      'api-ref/wsproxy/overview',
    ],
    "Client SDK API": [
      'api-ref/client-py/overview',
    ],
  },
};
