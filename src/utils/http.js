import Http from 'enslaver-http';
// import token from './token';

const apiMap = {
  localhost:
  'https://final-courseware-api.caihonggou.com',
  'final-admin-vue.caihonggou.com':
  'https://final-courseware-api.caihonggou.com',
  'final-admin.imkid.com.cn':
  'https://final-courseware-api.aikaola.com',
};

const errorAOP = (res) => {
  if (res.status === 401) window.location.href = '/mistake';

  throw res;
};

const tokens = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZmluYWwtYWRtaW4tYXBpLmNhaWhvbmdnb3UuY29tXC91c2VyXC9sb2dpbiIsImlhdCI6MTU0MzkxMzM2OSwiZXhwIjoxNTQ0NTE4MTY5LCJuYmYiOjE1NDM5MTMzNjksImp0aSI6IkMwTTVFRE1HbVRrcW5GRTYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJkb21haW4iOiJmaW5hbC1hZG1pbi1hcGkuY2FpaG9uZ2dvdS5jb20ifQ.BM49Ad4X3wbFqUWhJxLLMNG2VDlv4QmapmPD1zBspOk';

export const baseURI = apiMap[window.location.hostname];


export default new Http({
  baseURI,
  baseHeaders: {
    Authorization: `Bearer ${tokens}`,
  },
  errorAOP,
});
