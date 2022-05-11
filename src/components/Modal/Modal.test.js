/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from '@testing-library/react'
// import ReactDOM from "react-dom";
import Modal from './Modal'


// beforeAll(() => {
//   ReactDOM.createPortal = jest.fn((element, node) => {
//     return element;
//   });
// });

// afterEach(() => {
//   ReactDOM.createPortal.mockClear();
// });


// describe('Modal', () => {
//   it('Should render without crash', () => {
//     render(<Modal isActive={true} onClose={() => null} message="Employee Created!" />)

    

//   })
// })

describe('When the modal is active', () => {
  it('should render 2 close buttons', () => {
    const mockOnClose = jest.fn()
    const message = "Employee Created!"

    render(<Modal isActive={true} onClose={mockOnClose} message={message} />)

    const closeButtonSecondary = screen.getByRole('button', { name: /X/i })
    const closeButtonMain = screen.getByRole('button', { name: /Close/i })
    
    expect(closeButtonSecondary).toBeInTheDocument()
    expect(closeButtonMain).toBeInTheDocument()
  })

  it('should render a message in modal body according to the props', () => {
    const mockOnClose = jest.fn()
    const message = "Employee Created!"

    render(<Modal isActive={true} onClose={mockOnClose} message={message} />)

    const messageInModal = screen.getByText(message)
    
    expect(messageInModal).toBeInTheDocument()
  })

  describe('when I click on the modal body', () => {
    it('should keep the modal active and not call onClose function', () => {
      const mockOnClose = jest.fn()
      const message = "Employee Created!"
  
      render(<Modal isActive={true} onClose={mockOnClose} message={message} />)
  
      const modalContent = document.querySelector('.modal-content')
      modalContent.click()
      
      expect(mockOnClose).not.toBeCalled()
    })
  })

  describe('when I click on main close button', () => {
    it('should call onClose function”', () => {
      const mockOnClose = jest.fn()
      const message = "Employee Created!"
  
      render(<Modal isActive={true} onClose={mockOnClose} message={message} />)
  
      const closeButtonMain = screen.getByRole('button', { name: /Close/i })
      closeButtonMain.click()

      expect(mockOnClose).toBeCalled()
    })
  })

  describe('when I click on secondary close button', () => {
    it('should call onClose function”', () => {
      const mockOnClose = jest.fn()
      const message = "Employee Created!"
  
      render(<Modal isActive={true} onClose={mockOnClose} message={message} />)
  
      const closeButtonSecondary = screen.getByRole('button', { name: /X/i })
      closeButtonSecondary.click()
      
      expect(mockOnClose).toBeCalled()
    })
  })

  describe('when I click outside modal body', () => {
    it('should call onClose function”', () => {
      const mockOnClose = jest.fn()
      const message = "Employee Created!"
  
      render(<Modal isActive={true} onClose={mockOnClose} message={message} />)
  
      const modalContent = document.querySelector('.modal')
      modalContent.click()
      
      expect(mockOnClose).toBeCalled()
    })
  })

  describe('when I press escape button', () => {
    it('should call onClose function”', () => {
      const mockOnClose = jest.fn()
      const message = "Employee Created!"
  
      render(<Modal isActive={true} onClose={mockOnClose} message={message} />)
  
      fireEvent.keyDown(document.body, {key: 'Escape'})
      
      expect(mockOnClose).toBeCalled()
    })
  })
})
