
import React from 'react';
import styles from '../searchInput/index.module.css'

const HeroSearchBar = () => {
  return (
    <>
      <div className='flex '>
        <input type="text" name="search" placeholder="Search movies, persons, company, etc.." className={styles.input}></input>
      </div>


    </>
  );
};

export default HeroSearchBar;























// import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// const SearchBar = () => {
//   return (
//     <>
//     <Box
//       sx={{
//         width: 500,
//         maxWidth: '100%',
//       }}
//     >
//       <TextField fullWidth label="Search for Movies and hit Enter.." id="fullWidth" />
//     </Box>
//     </>
//   )
// }

// export default SearchBar;