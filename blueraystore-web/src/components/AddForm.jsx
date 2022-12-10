import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddForm(props){
    const [data, setData] = useState(props.data);
  
    const submit = e => {
        e.preventDefault()
        fetch('http://localhost/movie/add', {
          method: 'POST',
          body: JSON.stringify({ data }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then(json => setData(json.data))
      }

    return(
        <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" name="data[title]" value={data.title} 
                onChange={e => setData({ ...data, title: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Genre</Form.Label>
                <Form.Control type="text" placeholder="Enter a genre" name="data[genre]" value={data.genre}
                onChange={e => setData({ ...data, genre: e.target.value })}
                />
            </Form.Group>

            <Button variant="primary" type="submit" value="add"/>
        </Form>
    )
}

export default AddForm