import { CustomerCard } from './CustomerCard'
import data from '../../../../content/home/reviews.json'
import 'twin.macro'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Container } from '../../shared/Container'

const LabelText = styled.div`
  text-align: center;
  ${tw`uppercase tracking-wider  text-xl`}
`

export const Testimonials = () => (
  <Container isCentered id="testimonials" tw="pt-20" as={'section'}>
    <LabelText className="alt-font">{data.title}</LabelText>
    <div tw="mt-10 flex flex-col lg:flex-row gap-10">
      {data.reviews.slice(0, 3).map((customer, i: number) => (
        <CustomerCard key={i} customer={customer} />
      ))}
    </div>
  </Container>
)
