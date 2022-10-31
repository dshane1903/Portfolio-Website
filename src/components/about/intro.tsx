// components
import FadeIntoView from '~animations/fade-into-view';
import { Container, Typography } from '~ui/index';

export default function Intro() {
  return (
    <section className='bg-black-tone text-gray-50 pb-20 sm:pt-32 pt-20'>
      <FadeIntoView as={Container}>
        <Typography
          as='h1'
          className='font-black sm:text-7xl text-12vw lg:w-4/5 sm:w-11/12 xl:pr-3 fill-color-dark'
          resetStyles>
          Who am I? –
        </Typography>
      </FadeIntoView>
    </section>
  );
}
