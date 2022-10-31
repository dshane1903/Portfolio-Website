// components
import Layout from '~components/layouts/base';
import { Intro, Process, Story } from '~components/about/index';

export default function AboutPage() {
  return (
    <Layout title='About | Shane Duncan'>
      <Intro />
      <Process />
      <Story />
    </Layout>
  );
}
