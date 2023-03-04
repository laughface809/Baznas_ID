import React from 'react';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { PaperContentMenu } from '../styles';
import LogoImage from '../../../../assets/logo.jpg'

export default function Updates(){

  const data = [
  {
    title: 'UPZ Al Hidayah Denpasar',
    time: '1 Hari yang lalu'
  },
  {
    title: 'UPZ Al Hidayah Denpasar',
    time: '1 Bulan yang lalu'
  }
]

  return(
    <Paper sx={{paddingRight: '1rem', overflow: 'hidden', textAlign: 'justify', boxShadow: 'inset 3px -13px 8px -10px lightgray'}}>
      <Typography sx={PaperContentMenu('12rem')}>
      {data.map((ev) => {
        return (
        <div style={{borderBottom: '1px solid lightgray', paddingBottom: '1rem', paddingTop: '1rem', borderRadius: '4px'}}>
          <div style={{display: 'flex', marginBottom: '1rem'}}>
            <img src={LogoImage} alt="" style={{width: '3rem', marginRight: '1rem'}} />
            <Typography>
              {ev.title} <br />
              {ev.time}
            </Typography>
          </div>
          Denpasar — UPZ Al Hidayah Denpasar membayarkan uang sertifikat kelulusan murid kepada Sekolah s simply dummy text of 
          the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
          an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        )
      })}
      </Typography>
    </Paper>
  )
}