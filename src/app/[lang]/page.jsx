import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Expierience } from '@/components/Jobs';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { getDictionary } from '../../../get-dictionary';

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Header dictionary={dictionary.header} />
      <main className='flex min-h-screen flex-col items-center overflow-x-hidden'>
        <Hero dictionary={dictionary.hero} />
        <Projects dictionary={dictionary.proj} />
        <Skills dictionary={dictionary.skills} />
        <Expierience dictionary={dictionary.exp} />
      </main>
      <Footer dictionary={dictionary.footer} />
    </div>
  );
}
