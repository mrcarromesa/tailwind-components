import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { Modal } from '.'
import { ModalElement } from './Root'
import { useRef } from 'react'

const meta = {
  title: 'Components/Modal',
  component: Modal.Root,
} satisfies Meta<typeof Modal.Root>

export default meta

type Story = StoryObj<typeof Modal.Root>

const ModalComponent = () => {
  const modal = useRef<ModalElement | null>(null)

  return (
    <>
      <Modal.Root ref={modal} dismissible showCloseButton>
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal.Root>
      <Button onClick={() => modal.current?.open()}>Open Modal</Button>
    </>
  )
}

const ModalTemplate: Story = {
  render: ModalComponent,
}

export const Default = {
  ...ModalTemplate,
  args: {},
}
