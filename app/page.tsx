'use client'

import { title, subtitle } from '@/components/primitives'
import Typewriter from 'typewriter-effect'
import { SearchInput } from '@/components/search-input'

const categories = [
  'Assistência Técnica',
  'Aluguel de Containers',
  'Roupas Fitness',
  'Restaurantes',
  'Fisioterapia',
]

const typewriterText = categories.map((category) => category.concat('?'))

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          Procurando por&nbsp;
          <Typewriter
            options={{
              strings: typewriterText,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <br />
        <h2 className={subtitle({ class: 'mt-4' })}>
          Aposto que a turma tem algo para te recomendar!
        </h2>
      </div>

      <SearchInput baseClassName="md:w-1/2" placeholder="Chama!" />

      {/* <div className="mt-8">
        <Snippet hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  )
}
