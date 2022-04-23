import { useState } from "react";

const Gloassary = () => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/moon')
    .then(response => response.json())
    .then(data => console.log(data))
}