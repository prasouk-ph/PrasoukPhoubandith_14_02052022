/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'

describe('When the modal is active', () => {
  const mockOnClose = jest.fn()
  const message = "Employee Created!"
  const setup = () => render(<Modal isActive={true} onClose={mockOnClose} message={message} />);

  it('should render 2 close buttons', () => {
    setup()
    const closeButtonSecondary = screen.getByRole('button', { name: /X/i })
    const closeButtonMain = screen.getByRole('button', { name: /Close/i })
    
    expect(closeButtonSecondary).toBeInTheDocument()
    expect(closeButtonMain).toBeInTheDocument()
  })

  it('should render a message in modal body according to the props', () => {
    setup()
    const messageInModal = screen.getByText(message)
    
    expect(messageInModal).toBeInTheDocument()
  })

  describe('when I click on the modal body', () => {
    it('should keep the modal active and not call onClose function', () => {
      setup()
      const modalContent = document.querySelector('.modal-content')
      modalContent.click()
      
      expect(mockOnClose).not.toBeCalled()
    })
  })

  describe('when I click on main close button', () => {
    it('should call onClose function”', () => {
      setup()
      const closeButtonMain = screen.getByRole('button', { name: /Close/i })
      closeButtonMain.click()

      expect(mockOnClose).toBeCalled()
    })
  })

  describe('when I click on secondary close button', () => {
    it('should call onClose function”', () => {
      setup()
      const closeButtonSecondary = screen.getByRole('button', { name: /X/i })
      closeButtonSecondary.click()
      
      expect(mockOnClose).toBeCalled()
    })
  })

  describe('when I click outside modal body', () => {
    it('should call onClose function”', () => {
      setup()
      const modalContent = document.querySelector('.modal')
      modalContent.click()
      
      expect(mockOnClose).toBeCalled()
    })
  })

  describe('when I press escape button', () => {
    it('should call onClose function”', () => {
      setup()
      fireEvent.keyDown(document.body, {key: 'Escape'})
      
      expect(mockOnClose).toBeCalled()
    })
  })
})
