import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
function Search() {
  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    console.log(result)
  }

  const handleOnSelect = (item) => {
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
      </>
    )
  }
return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"180px"}}>
      <header className="App-header">
      <img src='https://i.postimg.cc/yNvzdhR4/640px-Google-2015-logo-svg-removebg-preview.png' alt='logo' style={{height:"80px", marginLeft:"180px"}}/>
        <div style={{width:"600px", marginTop:"40px"}}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder='Search Google or type a URL'
          />
        </div>
      </header>
    </div>
  )
}
export default Search;


