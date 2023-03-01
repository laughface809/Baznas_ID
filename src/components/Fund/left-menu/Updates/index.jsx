import React from 'react';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PaperContentMenu } from '../styles';

export default function Updates(){

  return(
    <Paper sx={{paddingRight: '1rem', overflow: 'hidden', textAlign: 'justify', boxShadow: 'inset 3px -13px 8px -10px lightgray'}}>
      <Typography sx={PaperContentMenu('12rem')}>
        Siswa dari keluarga miskin banyak yang tidak mendapatkan ijazah setelah mereka lulus dari sekolahnya, karena ia memiliki 
        tunggakan ke sekolah. Hal ini menyebakan mereka tidak bisa melanjutkan sekolah ke jenjang yang lebih tinggi atau juga 
        tidak bisa mencari pekerjaan karena ijazah menjadi syarat multak untuk melamar pekerjaan, maka program ini dilaksanakan 
        agar siswa miskin dapat memperoleh ijazahnya untuk mencari pekerjaan atau melanjutkan ke jenjang yang lebih tinggi.
      </Typography>
    </Paper>
  )
}