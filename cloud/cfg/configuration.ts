export default {
  COMMON: {
    project: 'nextjs-remote-images',
    region: process.env?.AWS_DEPLOYMENT_REGION || 'us-east-1',
    account: process.env?.AWS_ACCOUNT || '026090449790',
    defaultEnvironment: process.env?.DEFAULT_BRANCH || 'main',
  },
  HOSTING: {
    hostedZoneID: process.env?.HOSTED_ZONE_ID || '',
    hostedZoneName: 'oleksiipopov.com',
    staticDomainName: 'nextjs-remote-images.examples.oleksiipopov.com',
  },
} as const;
