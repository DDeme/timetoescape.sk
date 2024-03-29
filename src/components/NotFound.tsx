import Button from './shared/Button'
import { Link } from 'gatsby'
import notfound from '../../content/home/common/notfound.json'
import { Container } from './shared/Container'
import { UndrawUndrawPageNotFound } from 'react-undraw'
import { H1 } from './shared/typography/Headline'
import 'twin.macro'

const { title, description, button } = notfound

export const NotFound = () => (
  <section tw="py-20 flex items-center">
    <Container tw="p-4 flex flex-wrap items-center">
      <div tw="w-full flex md:w-5/12 text-center p-10">
        <UndrawUndrawPageNotFound height="300" />
      </div>
      <div tw="w-full md:w-7/12 text-center md:text-left p-10">
        <H1 altFont>{title}</H1>
        <p tw="text-xl lg:text-2xl mt-6 font-light">{description}</p>
        <p tw="mt-8 md:mt-12">
          <Link to="/">
            <Button size="lg">{button}</Button>
          </Link>
        </p>
      </div>
    </Container>
  </section>
)
