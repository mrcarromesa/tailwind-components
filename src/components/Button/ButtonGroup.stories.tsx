import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { ButtonGroup } from '../Button/Group'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof ButtonGroup>

const ModalComponent = () => {
  return (
    <>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </>
  )
}

const ButtonGroupTemplate: Story = {
  render: ModalComponent,
}

export const Default = {
  ...ButtonGroupTemplate,
  args: {},
}
