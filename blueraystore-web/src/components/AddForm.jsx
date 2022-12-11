import React, { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddForm() {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    // const form = useRef(null);
  
    const submit = e => {
        e.preventDefault()
        const data = {
            title,
            genre,
        }
        fetch('http://localhost/movie/add', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(res => alert("Movie added successfully!"))
      }

    return(
        <>
            <Form method='POST' onSubmit={submit} className="d-flex justify-content-center flex-column align-items-center">
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" placeholder="Enter a genre" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}/>
                </Form.Group>
                <ButtonGroup>
                    <Button variant="primary" type="submit">Add</Button>
                </ButtonGroup>
            </Form>
        </>
    )
}

export default AddForm