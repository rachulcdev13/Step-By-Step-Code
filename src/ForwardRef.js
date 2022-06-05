import React ,{forwardRef} from 'react'
import { Form } from 'react-bootstrap'

const ForwardRef = (props,ref) => {
    return (
        <> 
            <div>
                <h6>forwardRef example in Functional component : advanced of useRef</h6>
                <li>The forwardRef hooks allows React users to pass refs to child components</li>
                <li>The ref can be created and referenced with useRef or createRef and then passed in a parent component.</li> <br />
                <Form>
                    <Form.Group className="mb-3" size="sm">
                        <Form.Control type="text" placeholder="Enter Samething..." ref={ref} />
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default forwardRef(ForwardRef);
