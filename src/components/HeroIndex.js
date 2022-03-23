import React from "react";
import { useState, useEffect } from "react";
import { Form, Input, Label, Button } from "reactstrap";
const baseURL = `https://superheroapi.com/api/${process.env.REACT_ADMIN_API_KEY}`;

const HeroIndex = () => {
    const [ searchTerm, setSearchTerm ] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log({ ...searchTerm, [name]: value });
        setSearchTerm({ ...searchTerm, [name]: value });
    };

    
    return(
        <div className="app">
            <div className="controls">
                <Form>
                    <Label for="search">Search for A Character</Label>
                    <Input type="text" 
                    name="searchTerm" 
                    id="search" 
                    className="search" 
                    placeholder="Batman" 
                    value={searchTerm} 
                    onChange={handleInputChange} required />
                    <Button
                    color="primary">Search</Button>
                </Form>
            </div>            
        </div>
    )
}

export default HeroIndex;